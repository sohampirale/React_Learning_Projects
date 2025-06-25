import { createContext,useState,useContext } from "react";

function getTodosFromLocalStorage(){
    let todos=JSON.parse(localStorage.getItem("todos")) 
    console.log('fetched todos = '+JSON.stringify(todos));
    
    if(!todos){
        todos=[];
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    return todos;
}

const todos = getTodosFromLocalStorage();

const todosContext = createContext({
    todos,
    setTodos:()=>{}
})

export function useTodos() {
  return useContext(todosContext);
}

export default todosContext;