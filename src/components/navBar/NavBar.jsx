import React from 'react'
import { Link } from "react-router-dom";
import "./navBar.css"

function NavBar() {
  return (
    <div className='navbar-container mb-1'>
      <ul>
        <li><Link className='link' style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Seguridad</Link></li>
        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/meteorologia">Meteorologia</Link></li>
        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/reglamentacion">Reglamentacion</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
