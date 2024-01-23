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

const eventTypeColors: { [key: string]: string } = {
  평범: 'blue',
  중요: 'yellow',
  '매우 중요': 'red',
}

const Calendar: React.FC = () => {
  const [hasCookie, setHasCookie] = useState<boolean>(
    document.cookie.includes('token'),
  )
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<EventType | undefined>()
  const [eventList, setEventList] = useState<EventType[]>([])
  const [eventData, setEventData] = useState<EventType[]>([])
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

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
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/api/calendar-admin/create`,
          {
            event_date: selectedDate?.format('YYYY-MM-DD'),
            event_title: form.getFieldValue('event_title') || '',
            event_type: form.getFieldValue('event_type') || '',
            event_text: form.getFieldValue('event_text') || '',
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
        await axios.delete(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/calendar-admin/delete/${id}`,
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
            <Button type="primary" onClick={() => setOpen(true)}>
              일정 추가하기
            </Button>
            <Modal
              centered
              open={open}
              onOk={handleActionEvent}
              onCancel={() => setOpen(false)}
              width={800}
            >
              <Form form={form} layout="vertical">
                <Form.Item label="날짜" name="event_date">
                  {selectedDate?.format('YYYY-MM-DD')}
                </Form.Item>
                <Form.Item
                  label="제목"
                  name="event_title"
                  rules={[
                    {
                      required: true,
                      message: '제목을 입력하세요',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="상태"
                  name="event_type"
                  rules={[
                    {
                      required: true,
                      message: '상태를 선택하세요',
                    },
                  ]}
                >
                  <Select
                    defaultValue="중요도 선택하기"
                    style={{ width: '100%' }}
                    onChange={handleChange}
                    options={[
                      { value: '평범', label: '평범' },
                      { value: '중요', label: '중요' },
                      { value: '매우 중요', label: '매우 중요' },
                    ]}
                  />
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
                  <div
                    key={index}
                    style={{ display: 'flex', marginTop: '5px' }}
                  >
                    <span
                      style={{
                        fontSize: '20px',
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              일정을 클릭하고 일정을 관리해보세요
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Calendar
