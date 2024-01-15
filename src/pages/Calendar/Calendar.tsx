import React, { useState } from 'react'
import type { Dayjs } from 'dayjs'
import { Calendar as AntdCalendar } from 'antd'
import type { CalendarProps } from 'antd'
import './calendar.css'

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [eventList, setEventList] = useState<string[]>([])

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode)
  }

  const onSelect = (value: Dayjs) => {
    // 여기서 해당 날짜의 이벤트 리스트를 가져와서 업데이트
    const eventsForSelectedDate = getEventsForSelectedDate(value)
    setEventList(eventsForSelectedDate)

    // 선택된 날짜 업데이트
    setSelectedDate(value)
  }

  const getEventsForSelectedDate = (selectedDate: Dayjs): string[] => {
    // 여기서 해당 날짜에 대한 이벤트 리스트를 가져오는 로직을 작성
    // 임시로 더미 데이터를 반환하도록 작성하였습니다.
    return ['Event 1', 'Event 2', 'Event 3']
  }

  return (
    <div id="Calendar">
      <div className="Calendar__Wrapper">
        <div className="Calendar__Calendar__Container">
          <AntdCalendar onPanelChange={onPanelChange} onSelect={onSelect} />
        </div>
        <div className="Calendar__Contents__Container">
          <div>
            <p>Selected Date: {selectedDate?.format('YYYY-MM-DD')}</p>
            <ul>
              {eventList.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
