import React from 'react'
import style from './FooterSection.module.scss'

const FooterSection = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.content}>
            <h3 className={style.heading}>
            Не удалось записаться?
            </h3>
            <p className={style.text}>
            Позвоните и мы запишем вас по телефону
            </p>
         </div>
         <div className={style.phone}>
         8 927 009 06 00
         </div>
      </div>
   )
}

export default FooterSection