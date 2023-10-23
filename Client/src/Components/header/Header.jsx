import React from 'react'
import "./header.scss"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className='header'>
      <div className="header__logo">
        <Link to="/"><h3>Task Manager</h3></Link>
      </div>
      <div className="header__buttons" >
        <Link to="/signin">  <button type="button">Sign In </button></Link>
        <button type="button">Sign Out </button>
      </div>
    </nav>
  )
}

export default Header