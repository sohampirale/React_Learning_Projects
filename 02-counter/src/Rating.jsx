import { useState } from "react"

const Rating=()=>{
    const [rating,setRating] = useState('Rate out of 1-5');

    function btnClicked(e){
        setRating('You have rated : '+e.target.innerText);
    }
    return (
        <>
            <br/>
            <button onClick={btnClicked}>1</button>
            <button onClick={btnClicked}>2</button>
            <button onClick={btnClicked}>3</button>
            <button onClick={btnClicked}>4</button>
            <button onClick={btnClicked}>5</button>
            <p>{rating}</p>
        </>
    )
}

export default Rating