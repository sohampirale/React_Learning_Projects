import { useState } from "react";

import TodosTable from "./components/TodosTable";


const tempTodos={
    1:['Go to gym','Todo2'],
    4:['Todo8'],
    5:['Todo7']
}

const Todo=()=>{
    const [Todos,setTodos]=useState(tempTodos)

    console.log('Now Todos = '+JSON.stringify(Todos));

    const [newTodo,setNewTodo]=useState('');
    const [priority,setPriority] = useState(5);

    function setNewTodoHelper(e){
        setNewTodo(e.target.value);
    }

    function setNewTodoPriorityHelper(e){
        setPriority((Number)(e.target.value))
    }
    
    function addNewTodo(){
        const newTodos={...Todos};
        if(!newTodos[priority]){
            newTodos[priority]=[];
        }

        newTodos[priority].push(newTodo);
        setTodos(newTodos);
    }

    return (
        <>
            <input type="text" placeholder="Add new To-Do" onKeyUp={(e)=>{setNewTodoHelper(e)}}></input>
            <br/>
            <label >Select Priority
                <select value={priority} onChange={(e)=>{setNewTodoPriorityHelper(e)}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" >5</option>
                </select>
            </label>
            <button onClick={addNewTodo}>Add Task</button>
            <TodosTable Todos={Todos}/>
        </>
    )
}

export default Todo;