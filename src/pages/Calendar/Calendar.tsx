import React, { useEffect, useState } from 'react'
import type { Dayjs } from 'dayjs'
import { Calendar as AntdCalendar, Button, Form, Input, Modal } from 'antd'
import type { CalendarProps } from 'antd'
import './calendar.css'
import axios from 'axios'
import { EventType } from '@src/types/types'

const eventTypeColors: { [key: string]: string } = {
  평범: 'blue',
  중요: 'yellow',
  '매우 중요': 'red',
}

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [eventList, setEventList] = useState<EventType[]>([])
  const [eventData, setEventData] = useState<EventType[]>([])
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  const onSelect = (value: Dayjs) => {
    // 선택된 날짜 업데이트
    setSelectedDate(value)

    // 해당 날짜의 이벤트 리스트 가져와서 업데이트
    const eventsForSelectedDate = getEventsForSelectedDate(value)
    setEventList(eventsForSelectedDate)

    // 위에서 날짜를 선택했을 때 해당 날짜의 이벤트 리스트를 가져오는 로직을 호출하고, eventList를 업데이트합니다.
  }

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
      console.log(data)
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

  const handleAddEvent = async () => {
    try {
      // API 호출
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/calendar-admin/create`,
        {
          event_date: selectedDate?.format('YYYY-MM-DD'),
          event_title: form.getFieldValue('event_title'),
          event_type: form.getFieldValue('event_type'),
          event_text: form.getFieldValue('event_text'),
        },
      )

      // 추가된 이벤트를 상태에 반영
      setEventData(prevData => [...prevData, response.data.CalendarEvent])

      // Form 및 모달 상태 초기화
      form.resetFields()
      // 모달 닫기
      setOpen(false)
    } catch (error) {
      console.error('Error adding event:', error)
    }
  }

  const renderAddEventBtn = () => {
    if (selectedDate?.format('YYYY-MM-DD')) {
      return (
        <div>
          <Button type="primary" onClick={() => setOpen(true)}>
            일정 추가하기
          </Button>
          <Modal
            centered
            open={open}
            onOk={handleAddEvent}
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
                <Input />
              </Form.Item>
              <Form.Item label="설명" name="event_text">
                <Input.TextArea />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      )
    }

    return null
  }

  return (
    <div id="Calendar">
      <div className="Calendar__Wrapper">
        <div className="Calendar__Calendar__Container">
          <AntdCalendar
            onPanelChange={onPanelChange}
            onSelect={onSelect}
            dateCellRender={dateCellRender}
          />
        </div>
        <div className="Calendar__Contents__Container">
          <div>
            <p>{selectedDate?.format('YYYY-MM-DD')}</p>
            {eventList.length > 0 ? (
              <ul>
                {eventList.map((event, index) => (
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
              </ul>
            ) : (
              <>{renderAddEventBtn()}</>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
