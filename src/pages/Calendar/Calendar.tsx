import { Calendar as AntdCalendar, Modal, Button, Input, Space } from 'antd'
import './calendar.css'
import dayjs from 'dayjs'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Event {
  id: string
  title: string
  date: Date
}

const Calendar = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [visible, setVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  const [eventTitle, setEventTitle] = useState<string>('')
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null)
  const [editedEventTitle, setEditedEventTitle] = useState<string>('')

  const onSelect = (value: dayjs.Dayjs) => {
    setSelectedDate(value)
    setVisible(true)
  }

  const onModalOk = () => {
    if (selectedDate && eventTitle) {
      const newEvent: Event = {
        id: uuidv4(),
        title: eventTitle,
        date: selectedDate.toDate(),
      }
      setEvents([...events, newEvent])
    }

    setEventTitle('')
    setVisible(false)
  }

  const onModalCancel = () => {
    setEventTitle('')
    setVisible(false)
  }

  const onEditModalOk = () => {
    if (selectedEventId && editedEventTitle) {
      setEvents(prevEvents =>
        prevEvents.map(event =>
          event.id === selectedEventId
            ? { ...event, title: editedEventTitle }
            : event,
        ),
      )
    }

    setEditedEventTitle('')
    setEditVisible(false)
  }

  const onEditModalCancel = () => {
    setEditedEventTitle('')
    setEditVisible(false)
  }

  const onDelete = (eventId: string) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId))
  }

  const onEdit = (eventId: string) => {
    const selectedEvent = events.find(event => event.id === eventId)
    if (selectedEvent) {
      setSelectedEventId(selectedEvent.id)
      setEditedEventTitle(selectedEvent.title)
      setEditVisible(true)
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
            <Space>
              {event.title}
              <Button onClick={() => onEdit(event.id)}>Edit</Button>
              <Button onClick={() => onDelete(event.id)} danger>
                Delete
              </Button>
            </Space>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div id="calendar">
      <div>
        <div>
          <AntdCalendar onSelect={onSelect} dateCellRender={dateCellRender} />

          <Modal
            title="Add Event"
            visible={visible}
            onOk={onModalOk}
            onCancel={onModalCancel}
            footer={[
              <Button key="back" onClick={onModalCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" onClick={onModalOk}>
                Add
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
          </Modal>

          <Modal
            title="Edit Event"
            visible={editVisible}
            onOk={onEditModalOk}
            onCancel={onEditModalCancel}
            footer={[
              <Button key="back" onClick={onEditModalCancel}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" onClick={onEditModalOk}>
                Save
              </Button>,
            ]}
          >
            <Input
              placeholder="Edit event title"
              value={editedEventTitle}
              onChange={e => setEditedEventTitle(e.target.value)}
            />
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Calendar
