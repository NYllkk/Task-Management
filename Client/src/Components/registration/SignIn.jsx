import React, { useState } from 'react';
import './registration.scss';
import { useDispatch } from 'react-redux';
import { signin } from '../redux/authSlice';
const SignIn = () => {
    const [state, Setstate] = useState({
        email: "",
    })
    const handleChange = (e) => {
        Setstate({
            ...state,
            [e.target.name]: e.target.value,

        })
        console.log(state)
    }
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            signin({
                email: state.email,
                password: state.password,
            }))
        console.log('Form submitted', state);

    };
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="signup-form">
                <div className="signup-form__wrapper">
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Enter your Email" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Sign In" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignIn;
