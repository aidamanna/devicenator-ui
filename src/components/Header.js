import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar">
    <Link className="logo" to="/devices">
      <img className="logo-image" src="logo.png" alt="devicenator logo"/>
      <div className="logo-text" >Devicenator</div>
    </Link>
  </nav>

)

export default Header
