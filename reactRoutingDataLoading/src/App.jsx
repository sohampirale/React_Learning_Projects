import { useState } from 'react'
import {Outlet} from "react-router-dom"
import {useNavigate } from "react-router"

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>
     <p>
      <span onClick={()=>{
          navigate("/home")
      }}>Home</span>

      <span onClick={()=>{
        navigate("/about")
      }}>About</span>
     </p>
     <Outlet/>
     <p>Footer</p>
    </>
  )
}

export default App

