import React from 'react'

function TodosIndividual({todo,priority}) {
    return (
        <>
            <p>Todo : {todo} <button type='checkbox'></button></p>
        </>
    )
}

export default TodosIndividual
