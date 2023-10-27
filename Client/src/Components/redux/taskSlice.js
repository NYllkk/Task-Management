import { createSlice } from "@reduxjs/toolkit";

const initialTask = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : null;
const initialState = {
    TaskData: initialTask,
    Alltasks: {},
}

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


export const { taskAddedSuccesfully, taskAddfailure, getAllTaskSuccess, getAllTaskFailure, editTaskSuccess, deleteSuccess, deletefail } = taskSlice.actions;
export default taskSlice.reducer