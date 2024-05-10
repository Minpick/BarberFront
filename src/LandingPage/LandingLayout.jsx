import React from 'react'
import style from './LandingLayout.module.scss'
import HeaderSection from './HeaderSection/HeaderSection'
import IntroSection from './IntroSection/IntroSection'
import ServicesSection from './ServicesSection/ServicesSection'
import EmployeeSection from './EmployeeSection/EmployeeSection'
import FooterSection from './FooterSection/FooterSection'

const LandingLayout = () => {
   return (
      <div className={style.container}>
         <HeaderSection />
         <main>
            <IntroSection />
            <ServicesSection />
            <EmployeeSection />
         </main>
         <FooterSection />
      </div>
   )
}

export default LandingLayout