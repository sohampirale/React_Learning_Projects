import { useContext } from "react"
import userContext from "../context/userContext"

function Home(){
    const {user}=useContext(userContext)
    return (
        <>
            <p>Home component</p>
            <p>user = {user?JSON.stringify(user):"User not set yet"}</p>
        </>
    )
}

export default Home;