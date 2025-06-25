import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from "axios"

//
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route,Routes} from "react-router-dom"

//
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"

//temp
async function aboutLoader() {
  console.log('inside aboutLoader');
  try {
    const res = await axios.get(`https://redesigned-telegram-q7p6q67qp5w7f9wj4-3000.app.github.dev/about`);
    return res.data;
  } catch (error) {
    return error.res
  }
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>} loader={aboutLoader}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
