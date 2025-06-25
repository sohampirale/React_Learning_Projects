import dataContext from "./dataContext.js"
function logger(){
    console.log('Hello world');
}

function UseDataContextProvider({children}){
    return (
    <dataContext.Provider value={{
        val1:10,
        val2:"Soham",
        val3:logger
    }}>
        {children}
    </dataContext.Provider>)
}

export default UseDataContextProvider;