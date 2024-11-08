
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Pages/Register'
import Login from './Pages/Login'
import LayoutsOne from './Layouts/LayoutsOne'
import HomePgae from './Pages/HomePgae'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       
        <Route path='/Login' element =  {<Login/>} />
        <Route path='/register' element =  {<Register/>} />
        <Route path='/' element = {<LayoutsOne/>} >
        <Route index element = {<HomePgae/>} />
        
        </Route>
        
       


      </Route>
    )
  )

  return (
    <>

    <RouterProvider router={route} />

    </>
  )
}

export default App
