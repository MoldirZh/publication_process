import React, { useState } from 'react';
import '../Styles/App.css';
import '../Styles/Register.css';
import Axios from 'axios';

function Register() {

    const [firstNameReg, setFirstNameReg] = useState("");
    const [lastNameReg, setLastNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post('http://127.0.0.1:3001/register', {
            firstName: firstNameReg,
            lastName: lastNameReg,
            email: emailReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <div className='registration'>
            <h1>REGISTRATION</h1>
            <div>
                <input
                    type='text'
                    placeholder='First name'
                    onChange={(e) => {
                        setFirstNameReg(e.target.value)
                    }}
                />
                <input
                    type='text'
                    placeholder='Last name'
                    onChange={(e) => {
                        setLastNameReg(e.target.value)
                    }}
                />
                <input
                    type='text'
                    placeholder='Email'
                    onChange={(e) => {
                        setEmailReg(e.target.value)
                    }}
                />
                <input
                    type='text'
                    placeholder='Password'
                    onChange={(e) => {
                        setPasswordReg(e.target.value)
                    }}
                />
                <button onClick={register}>Register</button>
            </div>
        </div>
    );
}

export default Register;