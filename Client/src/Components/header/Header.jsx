import React from 'react'
import "./header.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Header = () => {
  // const { auth } = useSelector((state) => ({ ...state }));
  const auth = useSelector((state) => state.auth);
  // const currentUser = useSelector((state) => state.auth.currentUser);
  return (
    <nav className='header'>
      <div className="header__logo">
        <Link to="/"><h3>Task Manager</h3></Link>
      </div>
      <div className="header__buttons" >
        {auth.currentUser && auth.currentUser.token ? (
          <Link to="/signin"><button type="button">Sign out </button></Link>
        ) : (
          <>
            <Link to="/signin"><button type="button">Sign IN </button></Link>
            <Link to="/signup"><button type="button">Sign Up </button></Link>
          </>
        )}

      </div>
    </nav>
  )
}

export default Header