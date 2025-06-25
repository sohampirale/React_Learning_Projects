import { useState } from "react"
import courseContext from "./courseContext.js"

function CourseContextProvider({children}){
    const [course,setCourse]  = useState(null)
    return (
        <courseContext.Provider value={{
            course,
            setCourse
        }}>
            {children}
        </courseContext.Provider>
    )
}

export default CourseContextProvider;