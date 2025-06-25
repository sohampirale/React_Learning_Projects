import React from 'react'
import { NavLink } from 'react-router-dom';

const pages=[['Home',''],['Login','login'],['Projects','projects'],['Github','github']];
function Header() {
  return (<>
      <p>this is header</p>
      {
        pages.map(([Header,path])=>{
          return (
            <>
              <NavLink to={path}>{Header}</NavLink>
            </>
          )
        })
      }
    </>
  )
}

export default Header
