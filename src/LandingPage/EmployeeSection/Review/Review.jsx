import React from 'react'
import style from './Review.module.scss'
import EmployeeStars from '../EmployeeStars/EmployeeStars'

const Review = ({ name, avgStars, review }) => {
   return (
      <div className={style.wrapper}>
         <div className={style.name}>
            {name}
         </div>
         <EmployeeStars avgStars={avgStars} />
         <p className={style.review}>
            {review}
         </p>
      </div>
   )
}

export default Review