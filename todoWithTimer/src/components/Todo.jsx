import React, { useState,useId } from 'react'

//components
import TodoTimer from './TodoTimer'

//utils
import convertSecToSecMinHr from '../utils/convertSecToSecMinHr';

function Todo({ task, timeSec, _id, priority, markAsCompleted }) {
    console.log('inside Todo');
    const { min, sec, hr } = convertSecToSecMinHr(timeSec);

    let [secLeft, setSecLeft] = useState(sec);
    let [minsLeft, setMinsLeft] = useState(min);
    let [hoursLeft, setHoursLeft] = useState(hr);
    const uniqueId = useId();
    return (
        <>
            <p><textarea value={`Todo : ${task}`} /> <input type='checkbox' defaultChecked={false} onChange={() => markAsCompleted(_id, priority, secLeft, minsLeft, hoursLeft)}></input></p>
            <TodoTimer secLeft={secLeft} setSecLeft={setSecLeft} minsLeft={minsLeft} setMinsLeft={setMinsLeft} hoursLeft={hoursLeft} setHoursLeft={setHoursLeft} />           
        </>
    )
}

export default Todo
