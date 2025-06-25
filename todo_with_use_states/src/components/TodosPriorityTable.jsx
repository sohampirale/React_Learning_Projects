import React from 'react'

//components
import TodosIndividual from './TodosIndividual'
import TodosPriority from './TodosPriorityLabel'

function TodosPriorityTable({priority,todos}) {
    return (
        <>
            <TodosPriority priority={priority}/>
            {todos.map(todo=>{
               return <TodosIndividual priority={priority} todo={todo}/>
            })}
        </>
    )
}

export default TodosPriorityTable
