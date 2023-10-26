import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import history from "../../history";

const initialState = {
    isLoading: false,
    currentUser: null,
    error: false
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
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
console.log("ek3jhfjfehjgfehjfvghjegf")

export const { loginSuccess, loginfailure, registerSuccess, registerfailure, logoutSuccess } = authSlice.actions
export default authSlice.reducer
export const register = (user) => async (dispatch) => {
    console.log(user)
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
            history.push("/signIn")
            window.location.reload()
        } else {
            dispatch(registerfailure())
        }
        console.log("submission Succeesfull")
    }

    catch (error) {
        console.log(error)
    }
}

export const signin = (user) => async (dispatch) => {

    try {

        const response = await axios.post("http://localhost:4000/auth/signin", user)
        if (response) {
            localStorage.setItem("auth", JSON.stringify(response.data))
            // localStorage.setItem("auth", JSON.stringify(response.data))
            dispatch(loginSuccess(response.data))
            history.push("/dashboard")
            window.location.reload()
        } else {
            dispatch(loginfailure())
        } console.log("registration Successfull")
    } catch (error) {
        console.log(error)
    }
}



// 

// try {
//     const response = await axios.post("http://localhost:4000/auth/signin", user);

//     if (response.data) {
//         localStorage.setItem("auth", JSON.stringify(response.data)); // Fixed JSON.stringify
//         dispatch(loginSuccess(response.data));
//         history.push("/dashboard");
//         window.location.reload();
//     } else {
//         dispatch(loginFailure("Login failed")); // Pass an error message
//     }
// } catch (error) {
//     dispatch(loginFailure("Login failed"));
//     console.log(error);
// }


// 