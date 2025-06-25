import { useEffect, useState } from 'react'

function App() {
  const [theme,setTheme]=useState("dark")
  
  function changeTheme(){
    setTheme((prev)=>{
      if(prev=="dark"){
        return "light"
      }
      else{
        return "dark"
      }
    })
  }

  useEffect(()=>{
    console.log('Inside useEffect');
    
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  },[theme])

  return (
    <>
      <div className=' text-black dark:text-white  bg-white  dark:bg-gray-800'>
        Hello World
      </div>
      <p>theme : {theme}</p>
      <button onClick={changeTheme}>Change theme</button>
    </>
  )
}

export default App
