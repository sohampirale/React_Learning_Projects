import React from 'react'
import TodosPriorityTable from './TodosPriorityTable'

//components

function TodosTable({Todos}) {
    return (
        <>
            {
                Object.entries(Todos).map(([priority,todos])=>
                    (   
                        <TodosPriorityTable priority={priority} todos={todos}/>
                    )
                )
            }
        </>
    )
}

export default TodosTable
