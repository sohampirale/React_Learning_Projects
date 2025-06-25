    import { useState } from "react"

    //utils
    import RenderSelections from "../utils/RenderSelections";

    //components
    import CreateTimer from "./CreateTimer"


    const Arr=Array.from({length:60},(_,index)=>index+1);
    const Timer=()=>{
        const [minutes,setMinutes]=useState(0);
        const [seconds,setSeconds]=useState(0)
        const [hours,setHours]= useState(0);

        const [timers,setTimers] = useState([]);
        
        function startTimer(){
           const newTimers=[...timers];
           newTimers.push([seconds,minutes,hours]);
           setTimers(newTimers);
        }

        return (
            <>
                <RenderSelections parameterName="secs" parameter={seconds} setParameter={setSeconds} length={60} min={0}/>
                <RenderSelections parameterName="mins" parameter={minutes} setParameter={setMinutes} length={60} min={0}/>
                <RenderSelections parameterName="hr" parameter={hours} setParameter={setHours} length={24} min={0}/>

                <p>minutes : {minutes}</p>
                <p>seconds : {seconds}</p>
                <p>hours : {hours}</p>

                <button onClick={startTimer}>Start Timer</button>
                {
                    timers.map(([seconds,minutes,hours])=>{
                        return <CreateTimer minutes={minutes} seconds={seconds} hours={hours}/>
                    })
                }
            </>
        )
    }

    export default Timer;