import React from 'react'
import { Outlet } from 'react-router-dom'

function User() {
  return (
    <>
      <p>Hello from User component</p>
      <Outlet/>
    </>
  ) 
}

export default User
