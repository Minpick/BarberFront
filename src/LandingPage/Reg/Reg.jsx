import React, { useEffect } from 'react'
import style from './Reg.module.scss'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import MyInput from '../../UI/MyInput/MyInput';
import axios from 'axios';
import { BASE_URL } from '../../Utils/Utils';

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
   'password',
   'confirmPassword'
]

export async function action({ request }) {
   const obj = await makeObject(request, reviewFields)
   console.log(obj)
   try {
      await axios.post(`${BASE_URL}/auth/signup`, obj)
      return redirect('/auth')
   } catch (err) {
      return err
   }

}


const Reg = () => {
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
               <h3>Регистрация</h3>
               <MyInput placeholder={'Телефон'} name={'phone'}/>
               <MyInput placeholder={'Пароль'} name={'password'}/>
               <MyInput placeholder={'Подтвердите пароль'} name={'confirmPassword'}/>
               <button>Зарегистрироваться</button>
               <Link to='/auth' className={style.link}>Авторизация &#8594;</Link>
            </Form>
         </div>
      </>
   )
}

export default Reg