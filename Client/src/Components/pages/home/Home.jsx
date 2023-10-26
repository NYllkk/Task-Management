import React from 'react';
import './home.scss';
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Home = () => {
    // const { auth } = useSelector((state) => ({ ...state }));
    const currentUser = useSelector((state) => state.auth.currentUser);

    // const { currentUser } = auth;

    return (
        <div className="home">
            <div className="home__container">
                <h1>Task Manager</h1>
                <p>jehgdjegdehjhev</p>
                {
                    currentUser && currentUser.token ? (
                        <Link to="/dashboard">
                            <button className='button'>trhty</button>
                        </Link>
                    ) : (
                        <Link to="/signin">
                            <button className='button'>tyhythythtyjyt</button>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Home;
