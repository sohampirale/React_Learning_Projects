import { useEffect, useState } from 'react'

//components
import Box from './components/Box'

function App() {

  let [box1Attr,box1SetAttr]=useState('INR');;
  let [box2Attr,box2SetAttr] = useState('USD');
  let [box1Str,box1SetStr] = useState('From');
  let [box2Str,box2SetStr] = useState('To');
  let [fromVal,setFromValue]=useState(0);
  let [toVal,setToVal] = useState(0);

  function swap(){
    const tempAttr=box1Attr;

    box1SetAttr(box2Attr);
    box2SetAttr(tempAttr);
  }

  async function fetchData(){
    const response= await fetch(import.meta.env.VITE_WEATHER_API_URL+'?apikey='+import.meta.env.VITE_WEATHER_API_KEY+'&base_currency='+box1Attr+'&currencies='+box2Attr,)
    const data=await response.json();    
    console.log('data = '+JSON.stringify(data));
    const pricePer=(Number)(data.data[box2Attr]);
    console.log('pricePer = '+pricePer);
    if(pricePer){
      setToVal(pricePer*fromVal)
    }
  }

  useEffect(()=>{
    fetchData();
  },[fromVal,box1Attr,box2Attr])

  return (
    <>
      <Box attr={box1Attr} setAttr={box1SetAttr} str={box1Str} inputVal={fromVal} setInputVal={setFromValue}/> <br/>    
      <button onClick={swap}>Swap</button><br/>
      <Box attr={box2Attr} setAttr={box2SetAttr} str={box2Str} inputVal={toVal} setInputVal={setToVal}/>     
    </>
  )
}

export default App
