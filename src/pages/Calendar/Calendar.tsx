import React, { useEffect, useState } from 'react'
import {
  Calendar as AntdCalendar,
  Modal,
  Button,
  Input,
  Space,
  List,
  message,
} from 'antd'
import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'
import './calendar.css'

interface Event {
  id: string
  title: string
  date: Date
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [visible, setVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  const [eventTitle, setEventTitle] = useState<string>('')
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [messageApi, ContextHolder] = message.useMessage()

  const onSelect = (value: dayjs.Dayjs) => {
    setSelectedDate(value)
  }

  useEffect(() => {
    if (selectedDate) setVisible(true)
  }, [selectedDate])

  const onModalOk = () => {
    if (selectedDate && eventTitle) {
      if (editingEvent) {
        // If editing an existing event
        const updatedEvents = events.map(event =>
          event.id === editingEvent.id
            ? { ...event, title: eventTitle }
            : event,
        )
        setEvents(updatedEvents)
      } else {
        // If adding a new event
        const newEvent: Event = {
          id: uuidv4(),
          title: eventTitle,
          date: selectedDate.toDate(),
        }
        setEvents([...events, newEvent])
      }
    }

    setEventTitle('')
    setEditingEvent(null)
    setVisible(false)
  }

  const onModalCancel = () => {
    setEventTitle('')
    setEditingEvent(null)
    setVisible(false)
  }

  const onEdit = (event: Event) => {
    setEditingEvent(event)
    setEventTitle(event.title)
    setVisible(true)
  }

  const onDelete = (eventId: string) => {
    const confirmDelete = window.confirm('일정을 삭제하시겠습니까?')
    if (confirmDelete) {
      setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId))
      messageApi.success('일정이 삭제되었습니다.')
    }
  }

  const dateCellRender = (value: dayjs.Dayjs) => {
    const dayEvents = events.filter(event => {
      const eventDate = dayjs(event.date)
      return eventDate.isSame(value, 'day')
    })

    return (
      <ul>
        {dayEvents.map((event, index) => (
          <li key={index}>
            <Space>{event.title}</Space>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div id="calendar">
      <div>
        {ContextHolder}
        <div>
          <AntdCalendar
            onSelect={onSelect}
            // fullscreen={false}
            onPanelChange={() => {
              console.log('dd')
              setSelectedDate(null)
              setVisible(false)
            }}
            dateCellRender={dateCellRender}
          />

          <Modal
            title={editingEvent ? 'Edit Event' : 'Add Event'}
            visible={visible}
            onOk={onModalOk}
            onCancel={onModalCancel}
            footer={[
              <Button key="back" onClick={onModalCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" onClick={onModalOk}>
                {editingEvent ? 'Save' : 'Add'}
              </Button>,
            ]}
          >
            {selectedDate && (
              <>
                <p>{selectedDate.format('YYYY-MM-DD')}</p>
                <Input
                  placeholder="Enter event title"
                  value={eventTitle}
                  onChange={e => setEventTitle(e.target.value)}
                />
              </>
            )}
            <List
              dataSource={events}
              renderItem={event => (
                <List.Item>
                  <Space>
                    {event.title}
                    <Button onClick={() => onEdit(event)}>Edit</Button>
                    <Button onClick={() => onDelete(event.id)} danger>
                      Delete
                    </Button>
                  </Space>
                </List.Item>
              )}
            />
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Calendar
