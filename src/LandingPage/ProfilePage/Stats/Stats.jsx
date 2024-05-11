import React, { useState } from 'react'
import style from './Stats.module.scss'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { BASE_URL } from '../../../Utils/Utils'

export async function fetchStats(year, month) {
   const data = await axios.get(`${BASE_URL}/employee/metrics/${year}/${month}`)
   return data.data
}

const Metrics = () => {
   const [searchParams, setSearchParams] = useSearchParams()
   const [year, setYear] = useState(parseInt(searchParams.get('year')))
   const [month, setMonth] = useState(parseInt(searchParams.get('month')))
   const { data } = useQuery({ queryKey: ['stats', year, month], queryFn: () => fetchStats(year, month) })
   return (
      <div className={style.wrapper}>
         {data&&<>
            <h2>
               Данные за месяц:
            </h2>
            <div>
               Средний чек: {data.avgBill}
            </div>
            <div>
               Количество записей: {data.numberOfOrders}
            </div>
            <div>
               Сумма: {data.sum}
            </div>
            <div>
               Количество уникальных клиентов: {data.numberOfUniqueClients}
            </div>
         </>}
      </div>
   )
}

export default Metrics