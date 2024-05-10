import React from 'react'
import style from './HeaderSection.module.scss'
import { Link } from 'react-router-dom'

const HeaderSection = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.logo}>
            Изабелла
         </div>
         <nav className={style.nav}>
            <a href="#" className={style.navBtn}>
               Главная
            </a>
            <a href="#" className={style.navBtn}>
               Наши услуги
            </a>
            <a href="#" className={style.navBtn}>
               Наши парикмахеры
            </a>
         </nav>
         <Link to='appointment' className={style.btn}>
            Записаться
         </Link>
      </div>
   )
}

export default HeaderSection