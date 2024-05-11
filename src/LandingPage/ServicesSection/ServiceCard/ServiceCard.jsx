import React from 'react'
import style from './ServiceCard.module.scss'
import { Link } from 'react-router-dom'

const ServiceCard = ({ img, price, name }) => {
   return (
      <div className={style.wrapper}>
         <img src={img} alt={img} className={style.img}>
         </img>
         <h4 className={style.name}>
            {name}
         </h4>
         <div className={style.btnWrapper}>
            <p className={style.price}>
               от {price} ₽
            </p>
            <Link className={style.btn} to = '/appointment'>
               Записаться
            </Link>
         </div>
      </div>
   )
}

export default ServiceCard