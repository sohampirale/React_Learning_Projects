const TodoRenderer=(props)=>{
    const Todos=props.Todos

    console.log('Todos = '+JSON.stringify(Todos));
    
    const renderer=()=>{
        console.log('inside renderer');
        let ret='';
        for(let priority in Todos){
            ret+=`<p>Priority : ${priority}</p>`;

            for(let i=0;i< Todos[priority].length;i++){                
                ret+='<br/>';
                ret+=`
                    <p>Todo : ${Todos[priority][i]}</p>
                `
            }
        }
        return ret;
    }

    return (
        <>
            {renderer()}
        </>
    )
}

export default TodoRenderer