import React, { useEffect, useState } from 'react'
import style from './Appointment.module.scss'
import { Form, redirect, useNavigate } from 'react-router-dom'
import AppointmentForm from './AppointmentForm/AppointmentForm'
import AppointmentCalendar from './AppointmentCalendar/AppointmentCalendar'
import TimePicker from './TimePicker/TimePicker'
import { queryClient } from '../../main'
import moment from 'moment'
import axios from 'axios'
import { BASE_URL } from '../../Utils/Utils'

export async function makeObject(request, fieldsArr) {
   const formData = await request.formData()
   const dataObject = fieldsArr.reduce((obj, field) => ({
      ...obj,
      [field]: formData.get(field),
   }), {});
   return dataObject
}

export const reviewFields = [
   'comment',
   'priceListId',
   'phoneClient',
   'fio'
]

export async function action({ request }) {
   const obj = await makeObject(request, reviewFields)
   obj.employeeId = 1
   const searchParams = new URL(request.url).searchParams
   const year = searchParams.get('year')
   const month = searchParams.get('month')
   const day = searchParams.get('day')
   const time = searchParams.get('time')
   const startDate = moment.utc(`${year}-${month}-${day}T${time}`, 'YYYY-M-DTHH:mm').format()
   obj.startTime=startDate
   console.log(obj)
   try {
      console.log('here')
      await axios.post(`${BASE_URL}/landing/meeting/create`, obj)
      return redirect('..')
   } catch (err) {
      return err
   } 

}


const Appointment = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
   const navigate = useNavigate()
   const [serviceId,setServiceId] = useState('')
   return (
      <>
         <div className={style.overlay}
            onClick={() => { navigate(`..`) }}
         >
            <Form method='POST' className={style.content}
               onClick={(e) => e.stopPropagation()}
            >
               <h1>
                  Запись на прием
               </h1>
               <AppointmentForm serviceId={serviceId} setServiceId={setServiceId}/>
               <AppointmentCalendar />
               <TimePicker serviceId={serviceId}/>
               <button className={style.btn}>Записаться</button>
               <p  className={style.policy}>
               Нажимая на кнопку “Записаться” вы даете согласие на обработку персональных данных
               </p>
            </Form>
         </div>
      </>
   )
}

export default Appointment