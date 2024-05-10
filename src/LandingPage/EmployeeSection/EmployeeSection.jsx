import React from 'react'
import style from './EmployeeSection.module.scss'
import img1 from '../../Assets/EmployeeImgs/EmployeeImg1.png'
import img2 from '../../Assets/EmployeeImgs/EmployeeImg2.png'
import EmployeeCard from './EmployeeCard/EmployeeCard'

const EmployeeSection = () => {
   return (
      <div
         className={style.wrapper}>
         <h1 className={style.heading}>
            Наши парикмахеры
         </h1>
         <EmployeeCard
            name={'Алиса'}
            img={img1}
            avgStars={'4.7'}
            comment={'Профессиональный парикмахер с опытом обслуживания клиентов в течение 10 лет. Обладаю высоким уровнем навыков и опыта работы с различными типами волос. Каждый клиент для меня важен, и я всегда стремлюсь к результату, который превзойдет все ожидания.'}

         />
         <div className={style.line}>
         </div>
         <EmployeeCard
            name={'Ксюша'}
            img={img2}
            avgStars={'4.5'}
            comment={'Профессиональный парикмахер с опытом обслуживания клиентов в течение 10 лет. Обладаю высоким уровнем навыков и опыта работы с различными типами волос. Каждый клиент для меня важен, и я всегда стремлюсь к результату, который превзойдет все ожидания.'}

         />
      </div>
   )
}

export default EmployeeSection