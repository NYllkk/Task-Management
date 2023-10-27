import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../redux/authSlice.js"
import taskReducer from "../redux/taskSlice.js"
export const store = configureStore({
    reducer: {
        auth: authReducer,
        task: taskReducer,
    },
});