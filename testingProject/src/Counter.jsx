import React from 'react'
import { useState,useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count+1);
    }  

    useEffect(()=>{
        console.log('inside useEffect');
        return ()=>{
            console.log('cleanup/unmout function from useEffect');
            
        }
    },[count]);

    return (
    <>
        <p>count = {count}</p>
        <button onClick={increment}>Increment this</button>
    </>
    )
}

export default Counter
