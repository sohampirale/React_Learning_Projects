import { useState } from "react";



const InputReflector=()=>{
    console.log('inside InputReflector');
    
    const [text,setText] = useState('Nothing');
    const updateText=(e)=>{
        setText(e.target.value)
    }
    return(
        <>
            <input type ="text" placeholder="Enter some text" onKeyUp={updateText}></input>
            <p>You have entered : {text}</p>
        </>
    )
}

export default InputReflector