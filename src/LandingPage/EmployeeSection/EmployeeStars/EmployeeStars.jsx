import React from 'react'
import './EmployeeStars.scss'
import { Rating, Stack } from '@mui/material'

const EmployeeStars = ({avgStars}) => {
   return (
      <Stack spacing={1}>
         <Rating name="half-rating-read" defaultValue={avgStars||5} precision={0.1} readOnly />
      </Stack>
   )
}

export default EmployeeStars