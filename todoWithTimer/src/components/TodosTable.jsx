//components
import PriorityTodosTable from "./PriorityTodosTable"

const TodosTable=({Todos,setTodos,timelySubmissions,setTimelySubmissions,lateSubmissions,setLateSubmissions})=>{

    function markAsCompleted(_id,priority,secsLeft,minsLeft,hoursLeft){
        let completedTodo=null;
        if(priority){
            Todos[priority-1]=Todos[priority-1].filter(todo=>{
                if(todo._id!=_id){
                    return true
                } else {
                    completedTodo=todo;
                    return false;
                }
            })
        } else {
            for(let i=0;i<5;i++){
                Todos[i]=Todos[i].filter(todo=>{
                    if(todo._id!=_id){
                        return true
                    } else {
                        completedTodo=todo;
                        return false;
                    }
                })
            }
        }
        if(completedTodo){
            if(secsLeft==0&&minsLeft==0&&hoursLeft==0){
                const newLateSubmissions = [...lateSubmissions];
                newLateSubmissions.push(completedTodo)
                setLateSubmissions(newLateSubmissions);
            } else {
                const newTimeleySubmissions=[...timelySubmissions];
                completedTodo.secsLeft=secsLeft;
                completedTodo.minsLeft=minsLeft;
                completedTodo.hoursLeft=hoursLeft;
                newTimeleySubmissions.push(completedTodo);
                setTimelySubmissions(newTimeleySubmissions);
            }
            const newTodos=[...Todos];
            setTodos(newTodos);
        } else {
            console.log('Todo not found');
        }
    }

    return (
        //<PriorityTodosTable priority todos>
        <>
            <p>All Todos</p>
            {
                Todos.map((todos,index)=>{
                    console.log('todos = '+JSON.stringify(todos));
                    return <PriorityTodosTable priority={index+1} todos={todos} markAsCompleted={markAsCompleted}/>
                })
            }
            <p>Timely Submissions : </p>
            {                
                timelySubmissions.map((todo)=>{
                    return (
                        <>
                            <input type="checkbox" defaultChecked={true} readOnly/>
                            <textarea value={`${todo.task}`} readOnly/>
                            <p>Time left : Sec : {todo.secsLeft}, Min : {todo.minsLeft}, Hrs : {todo.hoursLeft}</p>
                        </>
                    )
                })
            }
            <p>Late Submissions : </p>
            {
                lateSubmissions.map(todo=>{
                    return (
                        <p>
                            <input type="checkbox" checked={true} readOnly/>
                            <textarea value={`${todo.task}`} readOnly/>
                        </p>
                    )
                })
            }
        </>
    )
}

export default TodosTable;