import {useContext} from "react"

import About from "../About/About.jsx"
import {userContext} from "../../context/userContext.js"

function Home(){
    const userData=useContext()
    return (<>
        <p>Home Component</p>
        <p>userData : {JSON.stringify(userData)}</p>
    </>)
}

export default Home