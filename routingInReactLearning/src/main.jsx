import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom';

//
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Project from './components/Project.jsx'
import UserProject from './components/UserProject.jsx';
import Github from './components/Github.jsx';

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='projects' element={<Project/>}>
      <Route path=':userId' element={<UserProject/>}/>
    </Route>
    <Route path='github' element={<Github/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
