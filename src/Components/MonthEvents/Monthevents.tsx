import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { EventType } from '@src/types/types'
import { Pagination } from 'antd'
import styles from '../../pages/Calendar/calendar.module.css'

interface MonthEventsProps {
  selectedDate: Dayjs | null
  groupedEventsByDate: { [date: string]: EventType[] }
  currentPage: number
  pageSize: number
  handlePageChange: (page: number) => void
  eventTypeColors: { [key: string]: string }
}

const Monthevents: React.FC<MonthEventsProps> = ({
  selectedDate,
  groupedEventsByDate,
  currentPage,
  pageSize,
  handlePageChange,
  eventTypeColors,
}) => {
  return (
    <div className={styles.calendarUpcomingEventsContainer}>
      <div className={styles.calendarUpcomingEventsTitle}>
        {selectedDate?.format('M')}월의 일정
      </div>
      <div className={styles.calendarSelectedDateEventsListContainer}>
        <ul className={styles.calendarSelectedDateEventsList}>
          {Object.entries(groupedEventsByDate)
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map(([date, events]) => (
              <div
                key={date}
                style={{
                  marginTop: '10px',
                  borderBottom: '1px solid #dbdbdb',
                  padding: '10px',
                }}
              >
                <div className={styles.calendarUpcomingDateEventsHeader}>
                  <p>{dayjs(date).format('MM-DD')}</p>
                </div>
                {events.map((event, index) => (
                  <div
                    key={index}
                    className={styles.calendarUpcomingDateEventsList}
                  >
                    <div className={styles.calendarUpcomingDateEventsHeader}>
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
                      <div
                        className={
                          styles.calendarUpcomingDateEventDescriptionContainer
                        }
                      >
                        <p>{event.event_title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </ul>
      </div>
      <div className={styles.calendarPage}>
        <Pagination
          current={currentPage}
          total={Object.entries(groupedEventsByDate).length}
          pageSize={pageSize}
          showSizeChanger={false}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Monthevents
