import React from 'react'
import { EventType } from '@src/types/types'
import styles from '../../pages/Calendar/calendar.module.css'

interface DayEventsProps {
  eventList: EventType[]
  eventDelandEditBtn: (event: EventType) => React.ReactNode
  eventTypeColors: { [key: string]: string }
}

const Dayevents: React.FC<DayEventsProps> = ({
  eventList,
  eventDelandEditBtn,
  eventTypeColors,
}) => {
  return (
    <div className={styles.calendarSelectedDateEventsListContainer}>
      <ul>
        {/* 전체 리스트 */}
        {eventList.map((event, index) => (
          <div key={index} className={styles.calendarDateEventsList}>
            <div className={styles.calendarDateEventsHeader}>
              <span
                style={{
                  fontSize: '30px',
                  color: eventTypeColors[event.event_type],
                  marginRight: '10px',
                  paddingBottom: '5px',
                }}
              >
                &#8226;
              </span>
              <p>{event.event_title}</p>
              {eventDelandEditBtn(event)}
            </div>
            <div className={styles.calendarDateEventDescription}>
              {event.event_text}
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Dayevents
