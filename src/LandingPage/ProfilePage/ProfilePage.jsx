import React from 'react'
import style from './ProfilePage.module.scss'
import Calendar from './Calendar/Calendar'
import Stats from './Stats/Stats'

const ProfilePage = () => {
   return (
      <div>
         <Calendar />
         <Stats />
      </div>
   )
}

export default ProfilePage