import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from "./components/Home/Home.jsx";
import Layout from './Layout.jsx'
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx';
import Testing from './components/Testing/Testing.jsx';
import Contact from './components/Contact/Contact.jsx';
import { Route } from 'react-router-dom';
import User from './components/User/User.jsx';
import UserId from './components/User/UserId.jsx';

// const router=createBrowserRouter([{
//   path:"/",
//   element:<Layout/>,
//   children:[{
//     path:'',
//     element:<Home/>
//   },{
//     path:'about',
//     element:<About/>,
//     children:[{
//       path:'aboutChild',
//       element:<Testing/>
//     }]
//   },{
//     path:'testing',
//     element:<Testing/>
//   },{
//     path:'contact-us',
//     element:<Contact/>
//   }
// ]
// }])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='testing' element={<Testing/>}/>
      <Route path='contact-us' element={<Contact/>}/>

       <Route path="user" element={<User/>}>
        <Route path=':userId' element={<UserId/>}/>
      </Route> 
      <Route path='github' element={<Github/>}/>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
