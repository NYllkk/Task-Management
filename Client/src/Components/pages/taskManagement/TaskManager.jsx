import React from 'react'
import Sidebar from "../../sidebar/Sidebar.jsx"
import AddTask from "../../pages/taskManagement/AddTask.jsx"
import "./taskManagement.scss"
import TaskList from './TaskList.jsx'

const TaskManager = () => {
    return (
        <div className="taskmanager">
            <div className="taskmanager_left">
                <Sidebar />
            </div>
            <div className="taskmanager_right">
                <div className="taskmanager_addtask">
                    <AddTask />
                </div>
                <div className="taskmanager_tasklist">
                    <TaskList />
                </div>
            </div>
        </div>
    )
}

export default TaskManager;