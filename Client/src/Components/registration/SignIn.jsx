import React, { useState } from 'react';
import './registration.scss';

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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');

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
