import { useContext, useEffect, useState } from "react";
import todosContext from "./todosContext"

function TodosContextProvider({children}){
    
    const [todos,setTodos]=useState(()=>{
        let todos=JSON.parse(localStorage.getItem("todos"))
        if(!todos){
            todos=[]
            localStorage.setItem("todos",JSON.stringify(todos))
        }
        return todos;
    })

    console.log('inside TodosContextProvider todos = '+JSON.stringify(todos));
    
    useEffect(()=>{
        console.log('Inside useEffect updating localstorage as well');
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    return (
    <>
        <todosContext.Provider value={{
            todos,
            setTodos
        }}>
            {children}
        </todosContext.Provider>
    </>
    )
}

export default TodosContextProvider;