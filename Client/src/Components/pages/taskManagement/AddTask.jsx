import React, { useState } from 'react';
import "./addtask.scss"
import { addTask, taskAddedSuccesfully } from "../../redux/taskSlice"
import { useDispatch, useSelector } from 'react-redux';

const AddTask = () => {

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(state.task, currentUser.id))
        setState({
            task: ""
        })
        console.log("handleSubmit")
    }
    const [state, setState] = useState({
        task: "",
    });
    const dispatch = useDispatch()
    const { auth } = useSelector((state) => ({ ...state }))
    const { currentUser } = auth
    return (
        <div className="addtask">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder='Enter your Task' onChange={handleChange} value={state.task} />
            </form>
            <div onClick={handleSubmit} className="button"><h5>Add task</h5></div>
        </div>
    );
};

export default AddTask;
