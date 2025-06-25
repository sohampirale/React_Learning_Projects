import { useState } from 'react'


//components
// import Timer from './components/Timer'
import TodosManager from './TodosManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodosManager/>
    </>
  )
}

export default App
