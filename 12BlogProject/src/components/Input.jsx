import { useId } from "react"

const Input=React.forwardRef(function Input({
    type="text",
    label=false,
    className="",
    ...props
},ref){
    const id =useId();

    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} className={` ${className}`} {...props} ref={ref}/>
        </>
    )
})


export default Input;
