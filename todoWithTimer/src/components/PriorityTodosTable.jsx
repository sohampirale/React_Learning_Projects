import React from 'react'

//components
import Todo from './Todo'

function PriorityTodosTable({priority,todos,markAsCompleted}) {
    console.log('inside PriorityTodosTable, todos = '+JSON.stringify(todos));
    return (    
        <>
            { todos.length!=0 &&
            <p className="text-lg font-bold text-blue-700 mb-2">Priority : {priority}</p>
            }   
            <div className="space-y-2">
                {
                    todos.map((todo,index)=>{
                        return <Todo task={todo.task} key={todo._id} timeSec={todo.timeSec} _id={todo._id} priority={priority} markAsCompleted={markAsCompleted}/>
                    })
                }
            </div>
        </>
    )
}

export default PriorityTodosTable
