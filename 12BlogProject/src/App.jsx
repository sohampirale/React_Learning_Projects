import { useEffect, useState } from 'react'
import authService from './auth/auth'
import service from './auth/service'
import {useDispatch} from "react-redux"
import {login} from "./store/authSlice"

function App() {
  const [loading, setLoading] = useState(true)
  const [user,setUser] = useState(null)
  const dispatch=useDispatch();

  useEffect(()=>{
    async function helper(){
      const userData=await authService.getUser()
      setLoading(false)

      if(userData){
        console.log('userData = '+JSON.stringify(userData));
        dispatch(login(userData))
        setUser(userData)
      }
    }
    setTimeout(()=>{
      helper()
    },2000)
  },[])

  async function handleSignup(){
    const signedUpUser=await authService.createAccount("soham@gmail.com","soham@1234")
    if(signedUpUser){
      setUser(signedUpUser)
    }
    console.log('signup = '+JSON.stringify(signup));
  }

  return (
    <>
      {
        loading ?
        (<p>...Loading...</p>)
        :(
          <>
          {
            user ?
            (<>Welcome : {JSON.stringify(user.email)}</>):
            (<>Please login</>)
          } 
          </>
        )
      }
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogout}>Lgout</button>

    </>
  )
}

export default App
