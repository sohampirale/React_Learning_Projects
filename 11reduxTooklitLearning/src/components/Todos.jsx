import { useSelector,useDispatch } from "react-redux"
import {removeTodo,toggleUpdatingStatus} from "../reducers/todo/todoSlice.js"

function Todos(){
    console.log('Todos Rendered');
    
    let {todos}=useSelector(state=>state)
    const dispatch=useDispatch();

    function handleOnDelete(id){
        dispatch(removeTodo(id))
    }

    function handleOnUpdate(todo){
        console.log('Inside handleOnUpdate');
        dispatch(toggleUpdatingStatus({newTodo:todo.text,id:todo.id}))
    }

    return (
        <>
            <p>All Todos</p>
            {todos.map((todo)=>(
                <div key={todo.id}>
                    <p>{todo.text}</p>
                    <button onClick={()=>handleOnUpdate(todo)}>--Update--</button>
                    <button onClick={()=>handleOnDelete(todo.id)}>-Remove</button>
                </div>
            ))}
        </>
    )
}

export default Todos;