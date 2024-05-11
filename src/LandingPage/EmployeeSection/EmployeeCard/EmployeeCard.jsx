import React from 'react'
import style from './EmployeeCard.module.scss'
import EmployeeStars from '../EmployeeStars/EmployeeStars'
import ReviewForm from '../ReviewForm/ReviewForm'
import Review from '../Review/Review'

const EmployeeCard = ({ name, avgStars, img, comment, reviews }) => {
   const leftReviews = reviews.filter((el, index) => index % 2).map(el => {
      return (
         <Review name={el.fioclient} review={el.reviewName} avgStars={el.stars} key={el.fioclient}/>
      )
   })
   const rightReviews = reviews.filter((el, index) => index !== 0 && index % 2 == 0).map(el => {
      return (
         <Review name={el.fioclient} review={el.reviewName} avgStars={el.stars}  key={el.fioclient}/>
      )
   })
   return (
      <div className={style.wrapper}>
         <div className={style.left}>
            <img alt='EmployeeImg' src={img} className={style.img}>
            </img>
            <Review name={reviews[0]?.fioclient} review={reviews[0]?.reviewName} avgStars={reviews[0].stars} />
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
                  {leftReviews}
               </div>
               <div className={style.rightReview}>
                  {rightReviews}
               </div>
            </div>
         </div>

      </div>
   )
}

export default EmployeeCard