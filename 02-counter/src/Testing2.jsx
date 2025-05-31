import React from "react";

const Testing2=React.memo(()=>{
    console.log('inside testing2');
    
    return(
        <>
        <p>Inside Testing2</p>
        </>
    )
})

export default Testing2;