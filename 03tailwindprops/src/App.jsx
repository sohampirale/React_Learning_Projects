import { useState } from 'react'

//Components
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card 
        imgURL="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
        cardTitle="card1"
        cardDescription="Hello there!"
      />
    </>
  )
}

export default App
