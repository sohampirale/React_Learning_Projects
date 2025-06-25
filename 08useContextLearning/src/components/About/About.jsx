import {useContext} from "react"
import dataContext from "../../context/dataContext.js"

function About({loaderData}){
    const data = useContext(dataContext);
    if(data.val3){
        data.val3()
    } else {
        console.log('val3 does not exists');
    }

    return (<>
            <p>About</p>
            <p>data : {JSON.stringify(data)}</p>
        </>)
}

export default About