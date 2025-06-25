import ButtonCounter from './ButtonCoutner'
import InputReflector from './InputReflector';
import ToggleLight from './ToggleLight';
import ToggleBio from './ToggleBio';
import Rating from './Rating';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function increaseCounter(){
      setCount(count+Math.random());
  }

  function decreaseCounter(){
    setCount(count-Math.random());
  }

  return (
    <>
      <ButtonCounter count={count} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter}/>
      <ButtonCounter count={count} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter}/>
      <InputReflector/>
      <ToggleLight/>
      <ToggleBio/>
      <Rating/>
    </>
  )
}

export default App
