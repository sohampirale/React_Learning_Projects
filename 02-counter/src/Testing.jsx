import React from "react";
const Testing=React.memo(()=>{
    console.log('inside testing');
    
    return(
        <>
        <p>Inside Testing</p>
        </>
    )
})

export default Testing;