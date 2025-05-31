import { useState } from "react";

import TodoRenderer from "./TodoRender";

const Todos={
    1:['Go to gym','Todo2'],
    2:['Todo3','Todo4'],
    3:['Todo5','Todo6'],
    4:['Todo8'],
    5:['Todo7']
}

const Todo=()=>{
    const [newTodo,setNewTodo]=useState('');
    const [priority,setPriority] = useState(5);

    function addNewTodo(e){
        setNewTodo(e.target.value);
    }

    function addPriorityNewTodo(e){
        setPriority((Number)(e.target.value))
    }
    
    function addNewTodo(){
        Todos[priority].push(newTodo);
    }

    return (
        <>
            <input type="text" placeholder="Add new To-Do" onKeyUp={addNewTodo}></input>
            <br/>
            <label >Select Priority
                <select value={priority} onChange={addPriorityNewTodo}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" >5</option>
                </select>
            </label>
            <button>Add Task</button>
            <p>Task entered : {newTodo}</p>
            <p>Priority selected : {priority}</p>
            <TodoRenderer Todos={Todos}/>
        </>
    )
}

export default Todo;