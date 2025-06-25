import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import App from './App.jsx'

import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"

const router=createBrowserRouter(createRoutesFromElements(
  <Route path="" element={<App/>}>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>

  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)