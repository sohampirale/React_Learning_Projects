import { useState,useRef,useEffect } from 'react'

import { useTodos } from './context/todosContext.js'
import AllTodos from "./components/AllTodos.jsx"

function App() {
  const {todos,setTodos}=useTodos();

  const newTodoInputRef=useRef();

  function addTodo(){
    const newTodo=newTodoInputRef.current.value
    console.log('newTodo = '+newTodo);
    const newTodos=[...todos]
    newTodos.push(newTodo)
    setTodos(newTodos)
    console.log('New todo added successfully');
  }
  useEffect(()=>{
    console.log("inside useEffect")
    localStorage.setItem('todos',JSON.stringify(todos))
  })

  return (
    <>
      <input
        type="text"
        placeholder='Enter new todo'
        ref={newTodoInputRef}/>

      <button onClick={addTodo}>Add Todo</button>
      <AllTodos/>
    </>
  )
}

export default App
