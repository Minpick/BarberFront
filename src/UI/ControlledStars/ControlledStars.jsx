import React, { useState } from 'react'
import './ControlledStars.scss'
import { Rating, Stack } from '@mui/material'

const ControlledStars = ({ name }) => {
   const [value, setValue] = useState(null)
   return (
      <Rating
         size='large'
         className='stars'
         name={name}
         value={value}
         onChange={(event, newValue) => {
            setValue(newValue);
         }}
      />
   )
}

export default ControlledStars