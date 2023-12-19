import { Calendar as AntdCalendar, Modal, Button } from 'antd'
import './calendar.css'
import { Moment } from 'moment'
import { useState } from 'react'

interface Event {
  title: string
  date: Moment
}

const Calendar = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [visible, setVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null)

  const onSelect = (value: Moment) => {
    setSelectedDate(value)
    setVisible(true)
  }

  const onModalOk = () => {
    if (selectedDate) {
      const title = prompt('Enter event title:')
      if (title) {
        setEvents([...events, { title, date: selectedDate }])
      }
    }

    setVisible(false)
  }

  const onModalCancel = () => {
    setVisible(false)
  }

  const dateCellRender = (value: Moment) => {
    const dayEvents = events.filter(event => event.date.isSame(value, 'day'))
    return (
      <ul>
        {dayEvents.map((event, index) => (
          <li key={index}>{event.title}</li>
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
            {selectedDate && <p>{selectedDate.format('YYYY-MM-DD')}</p>}
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Calendar
