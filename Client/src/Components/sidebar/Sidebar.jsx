import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from "react-redux"
const Sidebar = () => {
    const { auth } = useSelector((state) => ({ ...state }))
    const { currentUser } = auth
    console.log(currentUser, "in sidebar ")
    return (
        // <div>
        //     {currentUser.name}
        // </div>
        <div>
            <ul className="sidebar">
                <li className="list">
                    {/* {currentUser.name} */}

                </li>
                <li className="list">

                </li>
            </ul>
        </div>

    )
}

export default Sidebar;