import { useEffect, useState } from 'react'
import connectDB from './utils/connectDB'

function App() {
  const [DBConnected,setDBConnected] = useState(null)

  useEffect(()=>{
    connectDB(setDBConnected)
  },[])

  return (
    
    <>
      {
        DBConnected==true?
        <p>DB is connected</p>
        :
        DBConnected==false?
        <p>DB not connected</p>
        :
        <p>Still connecting</p> 
      }    
    </>
  )
}

export default App
