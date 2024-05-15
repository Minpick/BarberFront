import React, { useEffect, useState } from 'react'
import style from './Calendar.module.scss'
import axios from 'axios'
import { BASE_URL } from '../../../Utils/Utils'
import { Link, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import moment from 'moment'
import CalendarBar from '../../Appointment/AppointmentCalendar/CalendarBar/CalendarBar'
import Meeting from './Meeting/Meeting'


export async function fetchDays(year, month) {
   console.log(year, month)
   const data = await axios.get(`${BASE_URL}/employee/calendarForEmployee/${year}/${month}`)
   return data.data
}

const Calendar = () => {
   const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
   const displayedWeekDays = weekDays.map((el) => {
      return (
         <div className={style.weekDay} key={el}>
            {el}
         </div>
      )
   })
   const [searchParams, setSearchParams] = useSearchParams()
   const [year, setYear] = useState(parseInt(searchParams.get('year')))
   const [month, setMonth] = useState(parseInt(searchParams.get('month')))
   useEffect(() => {
      if (month === 0) {
         setMonth(12)
         setYear(year => year - 1)
      }
      if (month === 13) {
         setMonth(1)
         setYear(year => year + 1)
      }
   }, [month])
   const { data } = useQuery({ queryKey: ['days', year, month], queryFn: () => fetchDays(year, month) })
   const displayedDays = data?.map((el, index) => {
      return (
         <Link
            // to={`info?year=${year}&month=${moment(el.createdAt).format('M')}&day=${moment(el.createdAt).format('D')}`} 
            className={style.day}
            key={index}
            style={el.current ? { color: 'rgba(0, 0, 0, 0.713)' } : { color: '#77777734' }}>
            <div className={style.numbers}>
               {moment(el.createdAt).format('D')}
               {/* {el.count > 2 ? <span>+{el.count - 2}</span> : ''} */}
            </div>
            {el.count !== 0 && <div className={style.events}
            >
               {el.meetings?.map((elem, index) => index < 3 &&
                  (
                     <Meeting startTime={elem.startTime}
                        comment={elem.comment}
                        priceListId={elem.priceListId}
                        phoneClient={elem.phoneClient}
                        fio={elem.fio}
                        employeeId={1}
                        key={elem.startTime}
                     >
                        <div className={style.event} 
                        // onMouseEnter={e=>e.preventDefault()}


                        >
                           <div className={style.time}>{moment(elem.startTime).format('HH:mm')}</div>
                           <div>{elem.fio}</div>
                        </div>
                     </Meeting>
                  ))}
            </div>
            }
         </Link>
      )
   })

   return (
      <div className={style.wrapper}>
         <CalendarBar month={month} year={year} setMonth={setMonth} />
         <div className={style.weekDays}>{displayedWeekDays}</div>
         <div className={style.days}>
            {displayedDays}
         </div>
      </div>
   )
}

export default Calendar