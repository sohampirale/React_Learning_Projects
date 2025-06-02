import { useEffect, useState } from 'react'
import Counter from './Counter';

import UseMemoCompo from './useMemoLearning/UseMemoCompo';
import UseCallBackCompo from './useCallbackLearning/UseCallBackCompo';

function App() {
  const [count, setCount] = useState(0)
  const [bool,setBool] = useState(true);

  function increment(){
    setCount(count+1);
  }

  return (
    <>
      {/* <UseMemoCompo/> */}
      <UseCallBackCompo/>
    </>
  )
}

export default App
