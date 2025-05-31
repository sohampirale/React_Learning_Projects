import { useState } from "react";

const ToggleLight=()=>{
    console.log('inside ToggleLight');
    const [power,setPower] = useState(false);

    const updateToggle=(e)=>{
        if(e.target.checked){
            setPower(true)
        }else {
            setPower(false)
        }
    }

    return (
    <>
        <div>
        <input type="checkbox" onChange={updateToggle}></input>
        <p>Toggle is {power?'checked':'not checked'}</p>
        </div>
    </>
    )
}

export default ToggleLight;