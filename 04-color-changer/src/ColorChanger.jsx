import React from 'react'
import { useState } from 'react';

function ColorChanger() {
    const [color,setColor]=useState('p-50 bg-green-500');
    function changeColor(e){
        console.log('Changing color to '+e.target.innerText);
        setColor(`p-50 bg-${e.target.innerText}-500`);
    }


    return (
     <> 
            <button onClick={changeColor} className='p-5 bg-red-500'>red</button>
            <button onClick={changeColor} className='p-5 bg-blue-500'>blue</button>
            <button onClick={changeColor}className='p-5 bg-green-500'>green</button>
            <button onClick={changeColor}className='p-5 bg-orange-500'>orange</button>
            <button onClick={changeColor}className='p-5 bg-black text-white'>black</button>
            <button onClick={changeColor}className='p-5 bg-white-500'>white</button>
            <button onClick={changeColor}className='p-5 bg-purple-500'>purple</button>
            <div className={color}></div>
     </>   
    )
}

export default ColorChanger
