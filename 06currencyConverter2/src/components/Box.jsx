import React, { useState } from "react";

//constants
import currencyCodes from '../constants/currencyCodes.js'

const Box=React.memo(({Code,setCode,str,inputVal,setInputVal})=>{

    return (
        <>  
            <label >{str}
                <input type="text" value={inputVal} onChange={(e)=>setInputVal?setInputVal(e.target.value):null} ></input>
            </label>
            <label >Currency Type
                <select value={Code} onChange={(e)=>setCode(e.target.value)}>
                    {
                        currencyCodes.map((code,index)=>{
                            return <option key={code} value={code}>{code}</option>
                        })
                    }
                </select>
            </label>

        </>
    )
})

export default Box;