import React from 'react'
import { Link } from "react-router-dom";
import "./navBar.css"

function NavBar() {
  return (
    <div className='navbar-container mb-1'>
      <ul>
        <li><Link className='link' style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">SEG</Link></li>
        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/meteorologia">METE</Link></li>
        <li><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/reglamentacion">REGLA</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
