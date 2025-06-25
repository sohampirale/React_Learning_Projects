import { useContext, useState } from "react"
import userContext from "../context/userContext"

function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const {setUser} = useContext(userContext)
    return (<>
        <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>{
            const user={
                username,
                password
            }
            setUser(user);
        }}>Login Btn</button>
    </>)
}

export default Login