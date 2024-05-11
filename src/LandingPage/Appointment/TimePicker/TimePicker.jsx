import React, { useState } from 'react'
import style from './TimePicker.module.scss'
import { BASE_URL } from '../../../Utils/Utils'
import axios from 'axios'
import { Link, NavLink, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import moment from 'moment'

export async function fetchTime(employeeId, date, serviceId) {
   const data = await axios.get(`${BASE_URL}/landing/availableSlotsOnDay?employeeId=${employeeId}&serviceId=${serviceId}&date=${date}`)
   return data.data
}

const TimePicker = ({serviceId}) => {
   const [searchParams, setSearchParams] = useSearchParams()
   const year = searchParams.get('year')
   const month = searchParams.get('month')
   const day = searchParams.get('day')
   const time = searchParams.get('time')
   searchParams.delete('time')
   const date = moment(`${year}-${month}-${day}`, 'YYYY-M-D').format('YYYY-MM-DD')
   const { data } = useQuery({ queryKey: ['days', date,serviceId], queryFn: () => fetchTime(1, date, serviceId) })
   const displayed = data?.map((el) => {
      return (
         <NavLink to={`?${searchParams.toString()}&time=${moment(el).format('HH:mm')}`} className={style.time} key={el}
            style={time === moment(el).format('HH:mm') ? { background: 'linear-gradient(178deg, #c00505 0%, #8e0303 100%)', color: '#fff' } : {}}
         >
            {moment(el).format('HH:mm')}
         </NavLink>
      )
   })
   return (
      <div className={style.wrapper}>
         {data &&
            <>
               <h3>Выберите время</h3>
               <div className={style.timeWrapper}>{displayed}</div>
            </>
         }
      </div>
   )
}

export default TimePicker