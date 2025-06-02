import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

let count=0;
let timeoutId;

function CreateTimer({seconds=0,minutes=1,hours=0}) {
    let [minsLeft,setMinsLeft]=useState(minutes);
    let [secLeft,setSecLeft] = useState(seconds);
    let [hoursLeft,setHoursLeft] = useState(hours);

    useEffect(()=>{
        timeoutId=setTimeout(()=>{
            if(secLeft==0){
                setSecLeft(59);
                setMinsLeft(minsLeft-1);
                if(minsLeft==0){
                    setMinsLeft(59);
                    setHoursLeft(hoursLeft-1);
                } 
            } else {
                setSecLeft(secLeft-1);
            }
           
        },1000)
        if(secLeft==0&&minsLeft==0){
            console.log('Times up');
            clearTimeout(timeoutId);
        }   
    },[secLeft])

    function pauseTimer(){
        clearTimeout(timeoutId)
        timeoutId=null;
    }

    function resumeTimer(){
        if(!timeoutId)return
        if(secLeft==0&&minsLeft<=0){
            console.log('Time is already up');
        } else {
            setSecLeft(secLeft-1);
        }
    }

    return (
        <>
            <p>Time left : {minsLeft}:{secLeft}</p>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resumeTimer}>Resume</button>
        </>
    )
}

export default CreateTimer
