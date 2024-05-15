import React, { useState } from 'react'
import style from './Meeting.module.scss'
import moment from 'moment'
import classNames from 'classnames'
import { Form } from 'react-router-dom'
import { queryClient } from '../../../../main'
import { BASE_URL } from '../../../../Utils/Utils'
import axios from 'axios'

const services = ['Стрижка', 'Укладка', 'Окрашивание', 'Мелирование', 'Выпрямление', 'Уход']

const Meeting = ({ children, startTime, priceListId, comment, phoneClient, fio, employeeId }) => {
   const [active, setActive] = useState(false)
   async function deleteMeeting() {
      const obj = {
         "startTime": moment.utc(startTime).format(),
         "employeeId": employeeId
      }
      console.log(obj)
      try {
         await axios.post(`${BASE_URL}/employee/delete/meeting`, obj)
         return null
      } catch (err) {
         return err
      } finally {
         queryClient.invalidateQueries('days')
      }
   }
   return (
      <div
         className={style.wrapper}
         onClick={() => setActive(true)}
         onMouseLeave={() => setActive(false)}
      >
         <div
            onMouseLeave={(e)=>e.stopPropagation()}
            className={active ? classNames(style.appointmentWrapper, style.active) : style.appointmentWrapper}
         >
            <div className={style.text}>
               <strong>Время:</strong> {moment(startTime).format('HH:mm')}
            </div>

            <div className={style.text}>
               <strong>Услуга:</strong> {services[priceListId - 1]}
            </div>
            <div className={style.text}>
               <strong>Комментарий:</strong> {comment}
            </div>
            <div className={style.text}>
               <strong>Телефон клиента: </strong>{phoneClient}
            </div>
            <div className={style.text}>
               <strong>Имя клиента:</strong> {fio}
            </div>
            <button onClick={() => deleteMeeting()}>Удалить запись</button>
         </div>
         <div>{children}</div>
      </div>
   )
}

export default Meeting