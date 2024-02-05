import React, { useEffect, useState } from 'react'
import { Dayjs } from 'dayjs'
import {
  Calendar as AntdCalendar,
  Button,
  Form,
  Input,
  Modal,
  Select,
} from 'antd'
import type { CalendarProps } from 'antd'
import styles from './calendar.module.css'
import axios from 'axios'
import { EventType } from '@src/types/types'
import locale from 'antd/es/date-picker/locale/ko_KR'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import './calendar.css'

const eventTypeColors: { [key: string]: string } = {
  평범: 'green',
  중요: '#FFBB00',
  '매우 중요': 'red',
}
const options = [
  { value: '평범', label: '평범' },
  { value: '중요', label: '중요' },
  { value: '매우 중요', label: '매우 중요' },
]

const Calendar: React.FC = () => {
  const [hasCookie] = useState<boolean>(document.cookie.includes('token'))
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<EventType | undefined>()
  const [eventList, setEventList] = useState<EventType[]>([])
  const [eventData, setEventData] = useState<EventType[]>([])
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  // useEffect(() => {
  //   if (open) {
  //     console.log(selectedEvent)
  //   }
  // }, [open])

  const onSelectDate = (value: Dayjs) => {
    // 선택된 날짜 업데이트
    setSelectedDate(value)

    // 해당 날짜의 이벤트 리스트 가져와서 업데이트
    const eventsForSelectedDate = getEventsForSelectedDate(value)
    setEventList(eventsForSelectedDate)
  }

  const onSelectEvent = (event: EventType) => {
    setSelectedEvent(event)
  }

  useEffect(() => {
    if (selectedDate) onSelectDate(selectedDate)
  }, [eventData])

  const event_id = selectedEvent?.event_id

  const dateCellRender = (value: Dayjs) => {
    // 날짜에 대한 이벤트를 가져와서 이벤트가 있으면 표시
    const eventsForDate = getEventsForSelectedDate(value)
    if (eventsForDate.length > 0) {
      return (
        <div>
          {eventsForDate.map((event, index) => (
            <div key={index}>
              <span
                style={{
                  fontSize: '20px',
                  color: eventTypeColors[event.event_type],
                }}
              >
                &#8226;
              </span>
              {event.event_title}
            </div>
          ))}
        </div>
      )

      return null
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/calendar/list`,
      )

      const data = response.data.CalendarEvents
      setEventData(data)
      // setHasCookie(document.cookie.includes('token'))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const getEventsForSelectedDate = (selectedDate: Dayjs): EventType[] => {
    // 해당 날짜에 대한 이벤트 리스트 가져오기
    const events = eventData?.filter(
      event => event.event_date === selectedDate.format('YYYY-MM-DD'),
    )
    return events || []
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (selectedEvent) {
      form.setFieldsValue({
        event_title: selectedEvent.event_title,
        event_type: selectedEvent.event_type,
        event_text: selectedEvent.event_text,
      })
    }
  }, [selectedEvent])

  const handleActionEvent = async () => {
    if (selectedEvent) {
      try {
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1]
        const response = await axios.put(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/calendar-admin/update/${event_id}`,
          {
            event_id,
            event_date: selectedDate?.format('YYYY-MM-DD'),
            event_title: form.getFieldValue('event_title') || '', // 기본값으로 빈 문자열 설정
            event_type: form.getFieldValue('event_type') || '', // 기본값으로 빈 문자열 설정
            event_text: form.getFieldValue('event_text') || '', // 기본값으로 빈 문자열 설정
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )

        // 추가된 이벤트를 상태에 반영
        setEventData(prevData => [...prevData, response.data.CalendarEvent])

        // Form 및 모달 상태 초기화
        form.resetFields()
        // 모달 닫기
        setOpen(false)
        fetchData()
      } catch (error) {}
    } else {
      try {
        // API 호출
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1]
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/api/calendar-admin/create`,
          {
            event_date: selectedDate?.format('YYYY-MM-DD'),
            event_title: form.getFieldValue('event_title') || '',
            event_type: form.getFieldValue('event_type') || '',
            event_text: form.getFieldValue('event_text') || '',
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )

        // 추가된 이벤트를 상태에 반영
        setEventData(prevData => [...prevData, response.data.CalendarEvent])

        // Form 및 모달 상태 초기화
        form.resetFields()
        // 모달 닫기
        setOpen(false)
        fetchData()
      } catch (error) {
        console.error('Error adding event:', error)
      }
    }
  }
  const handleDelEvent = async (id: number) => {
    const confirmDelete = window.confirm('일정을 삭제하시겠습니까?')
    if (confirmDelete) {
      try {
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1]
        await axios.delete(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/calendar-admin/delete/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )

        // 삭제된 이벤트를 상태에서 제거
        setEventData(prevData =>
          prevData.filter(event => event.event_id !== id),
        )
      } catch (error) {
        console.error('Error deleting event:', error)
      } finally {
        // Form 및 모달 상태 초기화
        form.resetFields()
      }
    }
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const eventDelandEditBtn = (event: EventType) => {
    if (hasCookie) {
      return (
        <div style={{ marginLeft: 'auto' }}>
          <Button
            onClick={() => {
              onSelectEvent(event)
              setOpen(true)
            }}
            className={styles.calendarEditBtn}
          >
            <EditOutlined />
          </Button>
          <Button
            style={{ marginLeft: '10px' }}
            onClick={() => {
              handleDelEvent(event.event_id)
            }}
            className={styles.calendarDelBtn}
          >
            <DeleteOutlined />
          </Button>
        </div>
      )
    }
  }

  const renderEventModalBtn = () => {
    if (selectedDate?.format('YYYY-MM-DD')) {
      if (hasCookie) {
        return (
          <div>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true)
                setSelectedEvent(undefined)
                form.resetFields()
              }}
            >
              일정 추가하기
            </Button>
            <Modal
              centered
              open={open}
              onOk={handleActionEvent}
              onCancel={() => {
                setOpen(false)
              }}
              width={800}
            >
              <Form form={form} layout="vertical">
                <Form.Item label="날짜" name="event_date">
                  {selectedDate?.format('YYYY-MM-DD')}
                </Form.Item>
                <Form.Item
                  label="제목"
                  name="event_title"
                  rules={[{ required: true, message: '제목을 입력해주세요' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="중요도"
                  name="event_type"
                  rules={[{ required: true, message: '중요도를 입력해주세요' }]}
                >
                  <Select
                    defaultValue="중요도 선택하기"
                    style={{ width: '100%' }}
                    onChange={handleChange}
                    optionLabelProp="label"
                  >
                    {options.map(option => (
                      <Select.Option
                        key={option.value}
                        value={option.value}
                        label={option.label}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '25px',
                              color: eventTypeColors[option.value],
                              marginRight: '8px',
                            }}
                          >
                            &#8226;
                          </span>
                          {option.label}
                        </div>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="설명" name="event_text">
                  <Input.TextArea />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        )
      }
    }

    return null
  }

  return (
    <div id={styles.calendar}>
      <div className={styles.calendarWrapper}>
        <div className={styles.calendarContainer}>
          <AntdCalendar
            className={styles.antdCalendar}
            locale={locale}
            onPanelChange={onPanelChange}
            onSelect={onSelectDate}
            cellRender={dateCellRender}
          />
        </div>
        <div className={styles.contentsContainer}>
          <div className={styles.contentsHeader}>
            <p>{selectedDate?.format('YYYY-MM-DD')}</p>
            {renderEventModalBtn()}
          </div>
          {eventList.length > 0 ? (
            <>
              <ul>
                {eventList.map((event, index) => (
                  <div key={index} className={styles.contentsEventsList}>
                    <span
                      style={{
                        fontSize: '30px',
                        color: eventTypeColors[event.event_type],
                      }}
                    >
                      &#8226;
                    </span>
                    {event.event_title}
                    {eventDelandEditBtn(event)}
                  </div>
                ))}
              </ul>
            </>
          ) : (
            <div className={styles.contentsAddText}>
              일정을 클릭하고 일정을 관리해보세요
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Calendar
