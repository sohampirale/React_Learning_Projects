import React, { useMemo, useState } from 'react'
import largeArr from "./constants/largeArr.js"



function UseMemoCompo() {
    // console.log('largeArr = '+largeArr);
    const [count,setCount] = useState(0);

    const selectNoFn=useMemo(()=>{
        console.log('inside selectNoFn');
        return largeArr.find(no=>no===10000000);
    },[]);

    const selectedNo = selectNoFn;
    
    return (
        <>
            <p>count : {count}</p>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <p>select Obj : {  

            }</p>
        </>
    )
}

export default UseMemoCompo
