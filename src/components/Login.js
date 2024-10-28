import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-logo">
                <img src="../public/rentalMangLogo.png" alt="Property Management Logo"/>
            </div>

            <form className="login-form">
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" placeholder="Enter your username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
            
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;