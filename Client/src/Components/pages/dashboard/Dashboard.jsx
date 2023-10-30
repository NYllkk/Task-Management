import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import "./dashboard.scss"
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <Sidebar />
            </div>
            <div className="dashboard-right">
                <h2>Task Status Dashboard</h2>
                <div className="dashboard-card todo">
                    <h3>Todo</h3>

                </div>
                <div className="dashboard-card doing">
                    <h3>Doing</h3>

                </div>
                <div className="dashboard-card done">
                    <h3>Done</h3>
                </div>
            </div>
            <Link to="/taskmanager">
                <button className='button'>Add Task</button>
            </Link>
        </div>
    )
}

export default Dashboard;