import { useState } from 'react'

import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo/>      
    </>
  )
}

export default App
