import React from 'react'
import style from './LandingLayout.module.scss'
import HeaderSection from './HeaderSection/HeaderSection'
import IntroSection from './IntroSection/IntroSection'
import ServicesSection from './ServicesSection/ServicesSection'
import EmployeeSection from './EmployeeSection/EmployeeSection'
import FooterSection from './FooterSection/FooterSection'
import { BASE_URL } from '../Utils/Utils'
import { queryClient } from '../main'
import axios from 'axios'
import { Outlet } from 'react-router-dom'

export async function makeObject(request, fieldsArr) {
   const formData = await request.formData()
   const dataObject = fieldsArr.reduce((obj, field) => ({
      ...obj,
      [field]: formData.get(field),
   }), {});
   return dataObject
}
export const reviewFields = [
   'employeeId',
   'stars',
   'phoneClient',
   'reviewName'
]

export async function action({ request }) {
   const obj = await makeObject(request, reviewFields)
   obj.employeeId = 1
   console.log(obj)
   try {
      await axios.post(`${BASE_URL}/landing/review/create`, obj)
      return null
   } catch (err) {
      return err
   } finally {
      queryClient.invalidateQueries('employee')
   }

}


const LandingLayout = () => {
   return (
        <>
        <Outlet/>
            <main>
               <IntroSection />
               <ServicesSection />
               <EmployeeSection />
            </main>
            <FooterSection />
        </>
   )
}

export default LandingLayout