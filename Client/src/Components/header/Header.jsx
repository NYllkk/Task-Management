import React from 'react'
import "./header.scss"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className='header'>
      <div className="header__logo">
        <Link to="/"><h3 style={{ textDecoration: "none" }}>Task Manager</h3></Link>
      </div>
      <div className="header__buttons" >
        <Link to="/signin"><button type="button">Sign In</button></Link>
        <Link to="/signin"><button type="button">Sign out</button></Link>
      </div>
    </nav>
  )
}

export default Header