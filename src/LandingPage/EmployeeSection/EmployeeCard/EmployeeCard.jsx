import React from 'react'
import style from './EmployeeCard.module.scss'
import EmployeeStars from '../EmployeeStars/EmployeeStars'
import ReviewForm from '../ReviewForm/ReviewForm'
import Review from '../Review/Review'

const EmployeeCard = ({ name, avgStars, img, comment, reviews }) => {
   return (
      <div className={style.wrapper}>
         <div className={style.left}>
            <img alt='EmployeeImg' src={img} className={style.img}>
            </img>
            <Review name={'Оксана Конакова'} review={'Отличный парикмахер! Профессионал своего дела с золотыми руками. Мастерски подстригла, учла все мои пожелания и подарила идеальный образ.  '} />
         </div>
         <div className={style.right}>
            <div className={style.employee}>
               <div className={style.name}>
                  {name}
               </div>
               <EmployeeStars avgStars={avgStars} />
               <div className={style.avgStars}>{avgStars}</div>
            </div>
            <p className={style.comment}>
               {comment}
            </p>
            <ReviewForm />
            <div className={style.reviewWrapper}>
               <div className={style.leftReview}>
                  <Review name={'Оксана Конакова'} review={'Отличный парикмахер! Профессионал своего дела с золотыми руками. Мастерски подстригла, учла все мои пожелания и подарила идеальный образ. '} />
                  <Review name={'Оксана Конакова'} review={'Профессиональный парикмахер. Очень довольна результатом! Приятное обслуживание и уютная атмосфера. Рекомендую!'} />
               </div>
               <div className={style.rightReview}>
                  <Review name={'Оксана Конакова'} review={'Профессиональный парикмахер. Очень довольна результатом! Приятное обслуживание и уютная атмосфера. Рекомендую!'} />
                  <Review name={'Оксана Конакова'} review={'Отличный парикмахер! Профессионал своего дела с золотыми руками. Мастерски подстригла, учла все мои пожелания и подарила идеальный образ. '} />
               </div>
            </div>
         </div>

      </div>
   )
}

export default EmployeeCard