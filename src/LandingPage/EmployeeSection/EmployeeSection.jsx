import React from 'react'
import style from './EmployeeSection.module.scss'
import img1 from '../../Assets/EmployeeImgs/EmployeeImg1.png'
import img2 from '../../Assets/EmployeeImgs/EmployeeImg2.png'
import EmployeeCard from './EmployeeCard/EmployeeCard'
import axios from 'axios'
import { BASE_URL } from '../../Utils/Utils'
import { useQuery } from 'react-query'

async function fetchEmployee() {
   const data = await axios.get(`${BASE_URL}/landing/review`)
   return data.data
}



const EmployeeSection = () => {
   const { data } = useQuery('employee', fetchEmployee)
   const displayed = data?.map((el) => {
      return (
            <EmployeeCard
               key={el.employeeDTO.fio}
               name={el.employeeDTO.fio}
               img={img1}
               avgStars={el.employeeDTO.avgStars.toFixed(1)}
               comment={'Профессиональный парикмахер с опытом обслуживания клиентов в течение 10 лет. Обладаю высоким уровнем навыков и опыта работы с различными типами волос. Каждый клиент для меня важен, и я всегда стремлюсь к результату, который превзойдет все ожидания.'}
               reviews={el.getReviewDTO}
            />
      )
   })
   return (
      <div id='employeeSection'
         className={style.wrapper}>
         <h1 className={style.heading}>
            Наши парикмахеры
         </h1>
         {displayed}
      </div>
   )
}

export default EmployeeSection