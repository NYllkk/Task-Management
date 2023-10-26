import React from 'react';
import './home.scss';
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <h1>Task Manager</h1>
                <p>jehgdjegdehjhev</p>
            </div>
            <Link to="/login"><button className='button' type="submit">Submit</button></Link>
        </div>
    );
};

export default Home;
