import React from 'react'
import { useParams } from 'react-router-dom'

function UserProject() {
  const {userId}=useParams();
  return (
    <>
      <p>See projects of userid : {userId}</p>
    </>

  )
}

export default UserProject
