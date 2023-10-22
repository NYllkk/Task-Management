import React from 'react'
import "./header.scss"
const Header = () => {
  return (
    <nav className='header'>
        <div className="header__logo">
<h3>Task Manager</h3>
        </div>
       <div className="header__buttons" >
        <button type="button">Sign In </button>
        <button type="button">Sign Out </button>
        </div> 
    </nav>
  )
}

export default Header