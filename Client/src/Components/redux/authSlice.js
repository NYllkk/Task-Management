import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoading: false,
    currentUser: null,
    error: false
}
export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload
            state.isLoading = false
        },
        loginfailure: (state, action) => {
            state.error = action.payload
            state.isLoading = true
        },
        registerSuccess: (state, action) => {
            state.currentUser = action.payload
            state.isLoading = false
        },
        registerfailure: (state, action) => {
            state.error = action.payload
            state.isLoading = true
        },
        logoutSuccess: (state, action) => {
            state.currentUser = null
        }
    }
})
export const { loginSuccess, loginfailure, registerSuccess, registerfailure, logoutSuccess } = authSlice.actions
export default authSlice.reducer