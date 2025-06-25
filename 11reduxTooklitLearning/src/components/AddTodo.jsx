import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

//
import {addTodo,updateTodo,toggleUpdatingStatus} from "../reducers/todo/todoSlice.js"

function AddTodo(){
    console.log('AddTodo Rendered');
    let {newTodo,updatingStatus} = useSelector(state=>state)
    
    const [newAddTodo,setNewAddTodo] = useState(newTodo)
    console.log('newTodo = '+newTodo);
    console.log('newAddTodo = '+newAddTodo);
    const [stateUpdatingStatus,setUpdatingStatus] = useState(updatingStatus)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log('inside useEffect');
        setNewAddTodo(newTodo)
        setUpdatingStatus(updatingStatus)
    },[newTodo,updatingStatus])

    function handleAddTodo(){
        console.log('Inside handleAddTodo');
        dispatch(addTodo(newAddTodo));
        setNewAddTodo("")
    }

    function handleUpdateTodo(){
        dispatch(updateTodo({text:newAddTodo}))
    }

    return (
        <>
            <input type="text" placeholder="Add new Todo" value={newAddTodo} onChange={(e)=>setNewAddTodo(e.target.value)}/>
            <p>Updating status : {JSON.stringify(updatingStatus)}</p>
            {stateUpdatingStatus?
                <button onClick={handleUpdateTodo}>Update</button> :
                <button onClick={handleAddTodo}>Add Todo</button>
            }
        </>
    )
}

export default AddTodo;
