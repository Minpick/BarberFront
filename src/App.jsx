
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LandingLayout, { action as landingAction } from './LandingPage/LandingLayout'
import Appointment, { action as appointmentAction } from './LandingPage/Appointment/Appointment'
import Reg, { action as regAction } from './LandingPage/Reg/Reg'
import Auth, { action as authAction } from './LandingPage/Auth/Auth'
import Layout from './LandingPage/Layout/Layout'
import ProfilePage from './LandingPage/ProfilePage/ProfilePage'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} path='/'>
      <Route path='profile' element={<ProfilePage/>}/>
    <Route path='/' element={<LandingLayout />} action={landingAction} >
      <Route path='appointment' element={<Appointment />} action={appointmentAction} />
      <Route path='reg' element={<Reg />} action={regAction} />
      <Route path='auth' element={<Auth />} action={authAction} />
    </Route>

  </Route>
), { basename: '/' })

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
