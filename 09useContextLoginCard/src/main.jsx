import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import CreateCourse from './components/CreateCourse.jsx'
import CourseCard from './components/CourseCard.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path="" element={<App/>}>
    <Route path="create" element={<CreateCourse/>}/>
    <Route path="view" element={<CourseCard/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
