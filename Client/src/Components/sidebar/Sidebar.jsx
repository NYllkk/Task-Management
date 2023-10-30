import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./sidebar.scss"

const Sidebar = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { currentUser } = auth;

    return (
        <div className="sidebar-container">
            <div className="user-profile">
                Hello {currentUser.name}
            </div>
            <ul className="sidebar">
                <li className="list-item">
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className="list-item">
                    <Link to="/setting">
                        Setting
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
