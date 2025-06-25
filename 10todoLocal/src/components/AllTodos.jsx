import { useState } from "react";
import { useTodos } from "../context/todosContext"
import Todo from "./Todo";

function AllTodos(){
    const {todos} = useTodos();
    console.log('inside All todos = '+JSON.stringify(todos));

    return (
        <>
            {todos && todos.length!=0 ?
            (<>
                {todos.map(todo=>{
                    return <Todo todo={todo} key={todo}/>
                })}
            </>):(
                    <p>Todos not found</p>
                )
            }
        </>
    )
}

export default AllTodos;