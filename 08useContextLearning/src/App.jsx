import { useState } from 'react'
import {Outlet} from "react-router-dom"
import UseDataContextProvider from "./context/UseDataContextProvider.jsx"

function App() {

  return (
    <UseDataContextProvider>
      <p>Header</p>
      <Outlet/>
      <p>Footer</p>
    </UseDataContextProvider>
  )
}

export default App
