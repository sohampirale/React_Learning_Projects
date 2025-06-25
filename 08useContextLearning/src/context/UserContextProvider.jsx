import userContext from "./userContext.js"

function UserContexProvider({children}){
    return (
        <userContext.Provider value={{
            username:"Soham",
            avatar:"avatar.com"
        }}>
            {children}
        </userContext.Provider>
    )
}