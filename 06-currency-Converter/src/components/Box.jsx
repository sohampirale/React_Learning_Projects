import { useState } from "react";

//constants
import currencyCodes from '../constants/currencyCodes.js'

const Box=({attr,setAttr,str,inputVal,setInputVal})=>{

    return (
        <>  
            <label >{str}
                <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} ></input>
            </label>
            <label >Currency Type
                <select value={attr} onChange={(e)=>setAttr(e.target.value)}>
                    {
                        currencyCodes.map(code=>{
                            return <option value={code}>{code}</option>
                        })
                    }
                </select>
            </label>

        </>
    )
}

export default Box;