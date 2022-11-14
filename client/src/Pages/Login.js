import React, { useState } from 'react';
import '../Styles/App.css';
import '../Styles/Login.css';
import Axios from 'axios';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        Axios.post('http://127.0.0.1:3001/login', {
            email: email,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].email);
            }
        });
    }

    return (
        <div className='login'>
            <h1>LOGIN</h1>
            <div>
                <input
                    type='text'
                    placeholder='Email'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <input
                    type='text'
                    placeholder='Password'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <button onClick={login}>Login</button>
                <h1>{loginStatus}</h1>
            </div>
        </div>
    );
}

export default Login;