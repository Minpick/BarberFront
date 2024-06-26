import React from 'react'
import style from './CalendarBar.module.scss'
import PaginationBtns from '../../../../UI/PaginationBtns/PaginationBtns'

const CalendarBar = ({ month, year,setMonth }) => {
   const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
   const currentMonth = months[month - 1]
   return (
      <div className={style.wrapper}>
         <div className={style.left}>
            <p className={style.month}>{currentMonth}</p>
            <div className={style.year}>{year}</div>
         </div>
         <div className={style.right}>
            <div className={style.btns}><PaginationBtns page={month} setPage={setMonth} /></div>
         </div>
      </div>
   )
}

export default CalendarBar