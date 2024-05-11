import React from 'react'
import style from './ServicesSection.module.scss'
import ServiceCard from './ServiceCard/ServiceCard'
import img1 from '../../Assets/ServiceImgs/ServiceImg1.png'
import img2 from '../../Assets/ServiceImgs/ServiceImg2.png'
import img3 from '../../Assets/ServiceImgs/ServiceImg3.png'
import img4 from '../../Assets/ServiceImgs/ServiceImg4.png'
import img5 from '../../Assets/ServiceImgs/ServiceImg5.png'
import img6 from '../../Assets/ServiceImgs/ServiceImg6.png'

const ServicesSection = () => {
   return (
      <div className={style.wrapper} id='servicesSection'>
         <h2 className={style.heading}>Наши услуги</h2>
         <div className={style.grid}>
            <ServiceCard img={img1} price={'500'}  name = {'Женская стрижка'}/>
            <ServiceCard img={img2} price={'1500'} name = {'Укладка'}/>
            <ServiceCard img={img3} price={'3000'} name = {'Окрашивание'}/>
            <ServiceCard img={img4} price={'4000'} name = {'Мелирование'}/>
            <ServiceCard img={img5} price={'2000'} name = {'Кератиновое выпрямление'}/>
            <ServiceCard img={img6} price={'600'} name = {'Уход за волосами'}/>
         </div>
      </div>
   )
}

export default ServicesSection