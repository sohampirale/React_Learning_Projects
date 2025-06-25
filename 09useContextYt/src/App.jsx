import { useContext, useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import ThemeContextProvider from './context/ThemeContextProvider'
import themeContext from './context/themeContext'

function App() {
  const { theme } = useContext(themeContext)
 
  useEffect(()=>{
    const htmlElem=document.querySelector("html")

    if(theme=="dark"){
      htmlElem.classList.add("dark")  
    } else {
      htmlElem.classList.remove("dark")  
    }
  },[theme])

  return (
    <>
      <p>Theme : {theme}</p>
      <div className="flex flex-wrap min-h-screen items-center appElem" >
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
