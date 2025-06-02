async function currencyConverter(fromVal,fromCode,toCode,setToValue,setSuccess,setErr){
    try{
        console.log('making fetch req now');
        const response= await fetch(import.meta.env.VITE_WEATHER_API_URL+'?apikey='+import.meta.env.VITE_WEATHER_API_KEY+'&base_currency='+fromCode+'&currencies='+toCode,)
        const data=await response.json();    
        console.log('data = '+JSON.stringify(data));
        const pricePer=data.data[toCode];
        if(pricePer){
            setToValue(pricePer*fromVal);
            setSuccess(true);
        } else {
            setSuccess(false);
            console.log('Couldnt receive pricePer for Code : '+toCode);
        }
    } catch(err){
        setSuccess(false);
        setErr(err);
        console.log('Error while converting currency, ERR : '+err);
    }
}

export default currencyConverter;