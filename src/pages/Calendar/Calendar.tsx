import React, { useState } from 'react'
import {
  Calendar as AntdCalendar,
  Modal,
  Button,
  Input,
  Space,
  List,
} from 'antd'
import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'

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

  const onSelect = (value: dayjs.Dayjs) => {
    setSelectedDate(value)
    setVisible(true)
  }

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
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId))
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
            <Space>
              {event.title}
              {/* <Button onClick={() => onEdit(event)}>Edit</Button>
              <Button onClick={() => onDelete(event.id)} danger>
                Delete
              </Button> */}
            </Space>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <AntdCalendar onSelect={onSelect} dateCellRender={dateCellRender} />

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
  )
}

export default Calendar
