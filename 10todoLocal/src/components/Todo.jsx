import { useState } from "react";
import { useTodos } from "../context/todosContext";
import completedIcon from "../assets/completed.png"

function Todo({todo}){
    
    const {todos,setTodos} = useTodos()
    const [editingStatus,setEditingStatus] = useState(false)
    const [editedTask,setEditedTask] = useState(todo)

    function handleCompleted(){
        console.log('inside handleCompleted');
        const newTodos=todos.filter(storedTodo=>storedTodo!=todo)
        setTodos(newTodos)
    }

    function handleDismiss(){
        console.log('inside handleDismiss');
        const newTodos=todos.filter(storedTodo=>storedTodo!=todo)
        setTodos(newTodos)
    }

    function handleEdited(){
        console.log('inside handleEdited');
        
        for(let i=0;i<todos.length;i++){
            if(todos[i]==todo){
                todos[i]=editedTask
                break;
            }
        }
        const newTodos=[...todos]
        setTodos(newTodos)
    }
    
    console.log('inside Todo.jsx todo = '+JSON.stringify(todo));
    
    return (
    <>

        {editingStatus?
            (
            <>
                <input type="text" value={editedTask}  onChange={(e)=>setEditedTask(e.target.value)}/> 
                {/* <img onClick={handleEdited} src="../assets/save.png"/> */}
                <input type="checkbox"   onClick={handleEdited}/>
            </>
            ):
            (
            <>
                <label >{todo}</label>
                <input type="checkbox" onClick={handleCompleted}/>

                <input type="checkbox" onClick={handleDismiss}/>
                <input type="checkbox"  onClick={()=>setEditingStatus(true)}/>

                {/* <img onClick={handleCompleted} src={completedIcon} className="w-30"/>
                <img onClick={handleDismiss} src="../assets/dismiss.png"/>
                <img onClick={()=>setEditingStatus(true)} src="../assets/pencil.png"/> */}
            </>
            )

        }
    </>)
}

export default Todo;