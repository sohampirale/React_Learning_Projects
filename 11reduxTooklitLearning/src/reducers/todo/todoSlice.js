import {createSlice,nanoid} from "@reduxjs/toolkit"

function getTodosFromLocalStorage(){
    let todos=JSON.parse(localStorage.getItem("todos"));
    if(!todos){
        todos = []
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    return todos;
}

function storeTodosToLocalstorage(state){
    const todos= state.todos;
    localStorage.setItem("todos",JSON.stringify(todos))
}

const initialState={
    todos:getTodosFromLocalStorage(),
    newTodo:"",
    updatingStatus:false,
    newTodoId:null
}

// const initialState={
//     todos:[{id:1,text:"First todo"}]
// }

// const initialState=getTodosFromLocalStorage();

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log('inside addTodo');
            
            const todo={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            storeTodosToLocalstorage(state)
            state.newTodo=""
        },
        removeTodo:(state,action)=>{            
            const id= action.payload
            state.todos=state.todos.filter((todo)=>todo.id!==id)
            storeTodosToLocalstorage(state)
        },
        updateTodo:(state,action)=>{
            const {text}=action.payload;
            console.log('inside updateTodo text = '+text);
            
            state.todos=state.todos.map((todo)=>{
                if(todo.id==state.newTodoId){
                    todo.text=text
                } 
                return todo
            })
            state.id=null
            state.newTodo=""
            state.updatingStatus=false;
            storeTodosToLocalstorage(state)
        },
        toggleUpdatingStatus:(state,action)=>{
            const payload = action.payload
            const {newTodo,id}=action.payload
            state.updatingStatus=true
            state.newTodo=newTodo
            state.newTodoId=id 
        }
    }
})


export const {addTodo,removeTodo,toggleUpdatingStatus,updateTodo} = todoSlice.actions;

export default todoSlice.reducer