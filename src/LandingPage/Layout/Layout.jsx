import React from 'react'
import HeaderSection from '../HeaderSection/HeaderSection'
import { Outlet } from 'react-router-dom'
import '../../Utils/Utils'

const Layout = () => {
   return (
      <div className='container'>
         <HeaderSection />
         <Outlet />
      </div>
   )
}

export default Layout