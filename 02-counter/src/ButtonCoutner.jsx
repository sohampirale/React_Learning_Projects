
const ButtonCounter=(props)=>{
 
    return (
        <>
            <button onClick={props.increaseCounter}>Increase Couter </button>
            <button onClick={props.decreaseCounter}>Decrease Couter </button>
            <p>count = {props.count}</p>
        </>
    )
}

export default ButtonCounter;