import Login from "./Login"
import Signup from "./Signup";

function App() {
  const users=[
    {
      username:"Soham",
      password:"soham123"
    }
  ];

  function returnVar(){
    return 1;
  }
  return (
    <>
      this is {returnVar()}
      {/* <Login users={users}/> */}
      {/* <Signup users={users}/> */}
    </>
  )
}

export default App
