import React, { useEffect } from 'react'
import style from './Auth.module.scss'
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import MyInput from '../../UI/MyInput/MyInput';
import { BASE_URL } from '../../Utils/Utils';
import axios from 'axios';

export async function makeObject(request, fieldsArr) {
   const formData = await request.formData()
   const dataObject = fieldsArr.reduce((obj, field) => ({
      ...obj,
      [field]: formData.get(field),
   }), {});
   return dataObject
}
export const reviewFields = [
   'phone',
   'password'
]

export async function action({ request }) {
   const obj = await makeObject(request, reviewFields)
   console.log(obj)
   localStorage.clear()
   const year = new Date().getFullYear()
   const month = new Date().getMonth()+1
   axios.defaults.headers.common['Authorization'] = ``;
   try {
      await axios.post(`${BASE_URL}/auth/signin`, obj).then(function (response) {
         if (response.status === 200) {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("refreshToken", response.data.refreshToken)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
         }
      })
      return redirect(`/profile?year=${year}&month=${month}`)
   } catch (err) {
      return err
   }

}


const Auth = () => {
   
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   const navigate = useNavigate()
   return (
      <>
         <div className={style.overlay}
            onClick={() => { navigate(`..`) }}
         >
            <Form method='POST' className={style.content}
               onClick={(e) => e.stopPropagation()}
            >
               <h3>Авторизация</h3>
               <MyInput placeholder={'Телефон'} name={'phone'} />
               <MyInput placeholder={'Пароль'} name={'password'} />
               <button>Войти</button>
               <Link to='/reg' className={style.link}>Регистрация &#8594;</Link>
            </Form>
         </div>
      </>
   )
}

export default Auth