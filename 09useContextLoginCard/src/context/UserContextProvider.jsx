import userContext from "./userContext"
import { useState } from "react"

function UserContextProvider({children}){
    const [user,setUser] = useState(null)

    return (
    <userContext.Provider value={{
        user,
        setUser
    }}>
        {children}
    </userContext.Provider>)
}

export default UserContextProvider