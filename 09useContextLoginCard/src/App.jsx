import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Home from './components/Home'
import {Outlet} from "react-router-dom"
import CourseContextProvider from './context/CourseContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CourseContextProvider >
        <p>HEADER</p>
          <Outlet/>    
        <p>FOOTER</p>   
      </CourseContextProvider>
    </>
  )
}

export default App
