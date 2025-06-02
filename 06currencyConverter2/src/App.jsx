  //components
  import Box from './components/Box';

  //hooks
  import { useState, useEffect } from 'react'

  //custom hooks
  import useCurrencyConverter from './hooks/useCurrencyConverter';

  function App() {
    const [fromVal, setFromVal] = useState(0)
    const [fromCode, setFromCode] = useState('INR');
    const [toCode, setToCode] = useState('USD');
    const {toVal,success,err} = useCurrencyConverter(fromVal, fromCode, toCode);

    function swap() {
      setFromVal(toVal);
    }

    return (
      <>
        <Box str="From" Code={fromCode} setCode={setFromCode} inputVal={fromVal} setInputVal={setFromVal} /><br />
        <button onClick={swap}>Swap</button><br />
        <Box str="To" Code={toCode} setCode={setToCode} inputVal={toVal} /><br />
        {
          success?'Success!':''
        }
        {
          err?'ERR : '+err:''
        }
      </>
    )
  }

  export default App
