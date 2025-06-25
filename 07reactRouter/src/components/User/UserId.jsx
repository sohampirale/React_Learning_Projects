import React from 'react'
import { useParams } from 'react-router-dom'

function UserId() {
  const {userId} =useParams();
  return (
    <>
      <p>Hello from UserId component</p>
      <p>userId = {userId}</p>
    </>
  )
}

export default UserId
