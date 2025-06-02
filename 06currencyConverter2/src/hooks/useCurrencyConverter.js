import { useEffect,useState } from "react";

//utils
import currencyConverter from "../utils/currencyConverter";

let timeoutId=null;
function useCurrencyConverter(fromVal,fromCode,toCode){
    console.log('inside useCurrencyConverter');
    const [toVal,setToValue] = useState(0);
    const [success,setSuccess] = useState(null);
    const [err,setErr] = useState(null);
    useEffect(()=>{

        console.log('inside useEffect');
        if(fromVal==0){
            setToValue(0);
            return;
        }

        timeoutId=setTimeout(()=>{
            currencyConverter(fromVal,fromCode,toCode,setToValue,setSuccess,setErr);
            setSuccess(true);
        },500)

        return ()=>{
            console.log('inside cleanup function');
            if(timeoutId){
                clearTimeout(timeoutId);
            }   
        }
    },[fromVal,fromCode,toCode]);

    return {toVal,success,err};
}

export default useCurrencyConverter;