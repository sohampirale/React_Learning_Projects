import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react'
import convertSecToSecMinHr from '../utils/convertSecToSecMinHr';

function TodoTimer({secLeft,setSecLeft,minsLeft,setMinsLeft,hoursLeft,setHoursLeft}) {

    let timeoutId;

    function pauseTimer(){
         if(minsLeft<=0 && secLeft<=0 && hoursLeft<=0){
            console.log('Time is already up');
            return;
        }
        if(timeoutId){
            clearTimeout(timeoutId)
            timeoutId=null;
            console.log('Time paused');
        } else {
            console.log('Already paused');
        }
    }

    function resumeTimer(){
        if(minsLeft<=0 && secLeft<=0 && hoursLeft<=0){
            console.log('Time is already up');
            return;
        }

        if(!timeoutId){
            setSecLeft(secLeft-1);
            console.log('Timer started again');
        } else {
            console.log('Timer already running');
        }
    }

    useEffect(()=>{
        if(secLeft==0&&minsLeft==0&&hoursLeft==0){
            if(timeoutId){
                clearInterval(timeoutId);
            } 
            console.log('Times up');
            return;
        }

        timeoutId=setTimeout(()=>{
            if(secLeft==0){
                setSecLeft(59);
                setMinsLeft(minsLeft-1);
                if(minsLeft==0){
                    setHoursLeft(hoursLeft-1);
                    setMinsLeft(59);
                } else {
                    setMinsLeft(minsLeft-1);
                }
            } else {
                setSecLeft(secLeft-1);
            }
        },1000);

    },[secLeft,minsLeft,hoursLeft])

    return(
        <div className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded shadow">
            <p className="text-3xl font-bold text-gray-800">
                Time Left: {hoursLeft}h {minsLeft}m {secLeft}s
            </p>
            <div className="flex gap-4">
                <button
                    onClick={pauseTimer}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                    Pause
                </button>
                <button
                    onClick={resumeTimer}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                    Resume
                </button>
            </div>
        </div>
    )

}

export default TodoTimer;
