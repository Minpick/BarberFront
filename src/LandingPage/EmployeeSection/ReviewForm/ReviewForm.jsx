import React from 'react'
import style from './ReviewForm.module.scss'

const ReviewForm = () => {
   return (
      <div className={style.wrapper}>
         <h4 className={style.heading}>
            Оставьте отзыв о парикмахере
         </h4>
         <input  className={style.input} placeholder='Имя и фамилия'/>
         <input  className={style.input} placeholder='Ваш отзыв'/>
      </div>
   )
}

export default ReviewForm