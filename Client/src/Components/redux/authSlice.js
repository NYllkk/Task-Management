import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
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
export const register = (user) => async (dispatch) => {
    try {
        const formdata = new FormData();
        formdata.append("name", user.name);
        formdata.append("email", user.email);
        formdata.append("password", user.password);
        const config = {
            headers: {
                "content-type": "application/json",
            }
        }
        const response = await axios.post("http://localhost:4000/auth/register", formdata, config)
        if (response) {
            dispatch(registerSuccess(response.data))
        } else {
            dispatch(registerfailure())
        }
        console.log("submission Succeesfull")
    }

    catch (error) {
        console.log(error)
    }
}

