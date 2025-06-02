import React from 'react'

function Child({something}) {
    console.log('Child rendered');
    return (
        <>
            <p>Hello from Child</p>
        </>
    )
}

export default React.memo(Child)
