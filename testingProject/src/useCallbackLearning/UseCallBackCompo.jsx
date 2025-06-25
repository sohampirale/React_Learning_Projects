import React, { useCallback, useState } from 'react'
import Child from './Child'


function UseCallBackCompo() {
    console.log('Parent rendered');
    
    const [count,setCounter] = useState(0);
    const [asset,setAsset] =useState('Old asset')

    const something=useCallback(()=>{
        console.log('inside something fn() working on '+asset); 
    },[asset]);

    return (
        <>
            <p>Count = : {count}</p>
            <button onClick={()=>setCounter(count+1)}>Increment</button>
            <p>Asset = {asset}</p>
            <input type='text' onChange={(e)=>setAsset(e.target.value)}/>
            <Child something={something}/>
        </>        
    )
}

export default UseCallBackCompo
