import React, { useState } from 'react'
import style from './AppointmentForm.module.scss'
import MySelect from '../../../UI/MySelect/MySelect'
import MyInput from '../../../UI/MyInput/MyInput'
import MyTextarea from '../../../UI/MyTextarea/MyTextarea'

const options = [
   {'1': 'Стрижка ≈ 30 мин'},
   {'2': 'Укладка ≈ 30 мин'},
   {'3': 'Окрашивание ≈ 180 мин'},
   {'4': 'Мелирование ≈ 180 мин'},
   {'5': 'Кератиновое выпрямление ≈ 90 мин'},
   {'6': 'Уход ≈ 60 мин'},
]

const AppointmentForm = ({serviceId,setServiceId}) => {
   return (
      <div className={style.wrapper}>
         <h3>
            Выберите услугу
         </h3>
         <MySelect options={options} value={serviceId} setValue={setServiceId} name={'priceListId'} />
         <h3>
            Введите свои данные
         </h3>
         <div className={style.inputWrapper}>
            <MyInput placeholder={'Имя'} name={'fio'} />
            <MyInput placeholder={'Номер телефона'} name={'phoneClient'} />
         </div>
         <MyTextarea placeholder={'Ваш комментарий (Например, вы можете уточнить длину, плотность или цвет ваших волос.)'} name={'comment'} />
      </div>
   )
}

export default AppointmentForm