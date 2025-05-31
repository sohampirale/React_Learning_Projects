import { useState } from "react";
import Testing from "./Testing";
import Testing2 from "./Testing2";

let information='this is the info';
let count=0;
const ToggleBio=()=>{
    console.log('inside ToggleBio');
     
    const [tick,setTick]=useState(false);
    const [info,setInfo]=useState('Click the checkbox');
    function updateToggle(e){
        if(e.target.checked){
            setTick(true);
            setInfo(information)
            information='Info can be seen only once';
            console.log('information = '+information);
        } else {
            console.log('information = '+information);
            setInfo(information);
            setTick(false);
        }
    }

    return (
        <>
            <Testing2/>
            <input type="checkbox" checked={tick} onChange={updateToggle}></input>
            <p>{info}</p>
            {tick?<Testing/>:'nothing'}
        </>
    )
}

export default ToggleBio;