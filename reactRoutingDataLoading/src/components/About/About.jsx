import {useLoaderData} from "react-router-dom"

function About({loaderData}){
    console.log('inside About');
    
    const data= useLoaderData();
    return (<>
        <p>About</p>
        <p>data from backend : {data?.data}</p>
    </>)
}

export default About