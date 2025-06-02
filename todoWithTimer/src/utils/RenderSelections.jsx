import React from 'react'

function RenderSelections({parameterName,parameter,setParameter,length,min}) {
    const Arr=Array.from({
        length
    },(_,index)=>index+min);
    
    return (
         <select value={parameter} onChange={(e)=>setParameter((Number)(e.target.value))}>
            {
                Arr.map((value)=>{
                    return (
                        <option value={value}>{value} {parameterName}</option>
                    )
                })
            }
        </select>
    )
}

export default RenderSelections
