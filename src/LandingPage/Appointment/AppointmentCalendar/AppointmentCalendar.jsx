import React, { useEffect, useState } from 'react'
import style from './AppointmentCalendar.module.scss'
import axios from 'axios'
import { BASE_URL } from '../../../Utils/Utils'
import { Link, useSearchParams } from 'react-router-dom'
import moment from 'moment'
import { useQuery } from 'react-query'
import CalendarBar from './CalendarBar/CalendarBar'
import classNames from 'classnames'

export async function fetchDays(year, month, employeeId, serviceId) {
   console.log(year, month, employeeId, serviceId)
   const data = await axios.get(`${BASE_URL}/landing/${year}/${month}?employeeId=${employeeId}&serviceId=${serviceId}`)
   return data.data
}

const AppointmentCalendar = () => {
   const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
   const displayedWeekDays = weekDays.map((el) => {
      return (
         <div className={style.weekDay} key={el}>
            {el}
         </div>
      )
   })
   const [searchParams, setSearchParams] = useSearchParams()
   const [year, setYear] = useState(parseInt(new Date().getFullYear()))
   const [month, setMonth] = useState(parseInt(new Date().getMonth() + 1))
   const paramsDay = searchParams.get('day')
   const paramsMonth = searchParams.get('month')
   const paramsYear = searchParams.get('year')
   const date = moment(`${paramsYear}-${paramsMonth}-${paramsDay}`, 'YYYY-M-D').format('YYYY-MM-DD')

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
   const { data } = useQuery({ queryKey: ['days', year, month], queryFn: () => fetchDays(year, month, 1, 1) })
   const colors = {
      'COURT': "#ad2d2ddd",
      'CONSULT': "#3788d8",
      'ETC': "#303030"
   }
   const displayedDays = data?.map((el, index) => {
      return (
         <Link to={`?year=${year}&month=${moment(el.localDate).format('M')}&day=${moment(el.localDate).format('D')}`}
            className={date === el.localDate ? classNames(style.day, style.active) : style.day}
            key={index} >
            <div
               style={el.current ? {} : { color: 'rgba(0, 0, 0, 0.146)' }}
               className={style.numbers}
            >
               {moment(el.localDate).format('D')}
            </div>
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

export default AppointmentCalendar