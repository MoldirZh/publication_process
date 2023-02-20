import React, { useState } from 'react';
import '../Styles/App.css';
import '../Styles/Login.css';
import Axios from 'axios';
import LoginRegister from "./LoginRegister.png"

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
            <div className='loginleft'>
                <h1>LOGIN</h1>
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
            <div className='loginright'>
                <img id="registerImg" src={LoginRegister} alt="The Pulpit Rock" width="100%" height="100%">
                </img>
            </div>
        </div>
    );
}

export default Login;
