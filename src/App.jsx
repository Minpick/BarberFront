
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LandingLayout from './LandingPage/LandingLayout'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Outlet/>}>
    <Route index element={<LandingLayout/>}>

    </Route>
  </Route>
), { basename: '/' })

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
