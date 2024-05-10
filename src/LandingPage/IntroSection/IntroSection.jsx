import React from 'react'
import style from './IntroSection.module.scss'
import img from '../../Assets/IntroImg.png'
import { Link } from 'react-router-dom'

const IntroSection = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.headingWrapper}>
            <h1 className={style.heading}>
               Красота доступна каждому
            </h1>
            <p className={style.text}>
               У нас самое лучшее соотношение цены/качества
               и самый большой спектр услуг в одном салоне
            </p>
         </div>
         <div className={style.imgWrapper}>
            <img className={style.img} alt='introPhoto' src={img}></img>
            <Link to='appointment' className={style.btn}>Записаться</Link>
         </div>
      </div>
   )
}

export default IntroSection