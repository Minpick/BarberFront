
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'


const router = createBrowserRouter(createRoutesFromElements(
<Route index element={<div>Hi,</div>}>

</Route>
),{ basename: '/' })

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
