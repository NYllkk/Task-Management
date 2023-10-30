import { createSlice } from "@reduxjs/toolkit";
import history from "../../history";
import axios from "axios";
import { loginSuccess, loginfailure } from "./authSlice";
const initialTask = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : null;
const initialState = {
    TaskData: initialTask,
    Alltasks: {},
}
// const initialState = {
//     isLoading: "null",
//     isUser: true,
//     error: false,
// }
export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        taskAddedSuccesfully: (state, action) => {
            state.TaskData = action.payload
        },
        taskAddfailure: (state) => {
            return state;
        },
        getAllTaskSuccess: (state, action) => {
            state.Alltasks = action.payload
        },
        getAllTaskFailure: (state, action) => {
            return state
        },
        editTaskSuccess: (state, action) => {
            state.TaskData = action.payload
        },
        deleteSuccess: (state, action) => {
            state.TaskData = action.payload
        },
        deletefail: (state) => {
            return TaskData
        }
    }
})

export const { taskAddedSuccesfully, taskAddfailure, getAllTaskSuccess, getAllTaskFailure, editTaskSuccess, deleteSuccess, deletefail } = taskSlice.actions
export default taskSlice.reducer


export const addTask = (task, id) => async (dispatch) => {
    const taskData = {

        task, id
    }
    const response = axios.post("http://localhost:4000/task/add", taskData);
    // if (response) {
    //     dispatch(loginSuccess)
    // } else {
    //     loginfailure
    // }
    console.log(response)
}