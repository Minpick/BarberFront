import React from 'react'
import style from './ReviewForm.module.scss'
import { Form } from 'react-router-dom'
import MyInput from '../../../UI/MyInput/MyInput'
import MyTextarea from '../../../UI/MyTextarea/MyTextarea'
import ControlledStars from '../../../UI/ControlledStars/ControlledStars'



const ReviewForm = () => {
   return (
      <div className={style.wrapper}>
         <h4 className={style.heading}>
            Оставьте отзыв о парикмахере
         </h4>
         <Form  method='post'>
            <div className={style.miniWrapper}>
               <MyInput placeholder='Номер телефона' name={'phoneClient'} />
               <ControlledStars name={'stars'} />
            </div>
            <MyTextarea placeholder='Ваш отзыв' name={'reviewName'} />
            <button className={style.btn}>Оставить отзыв</button>
         </Form>
      </div>
   )
}

export default ReviewForm