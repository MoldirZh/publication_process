import React, {useState} from 'react';
import Axios from 'axios'; 
import './App.css';

function App() {
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(""); 

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

  const login = () => {
    Axios.post('http://127.0.0.1:3001/login', {
      email: email,
      password: password  
    }).then((response) => {
      if(response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  }

  return (
    <div className='App'>
         <span className="column1" >

      <h1>REGISTRATION</h1>
      <div className='registration'>
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
      <h1>LOGIN</h1>
      <div className='login'>
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
  </span>
  <span className="column2" >
    <h2>Publication Process <br/> Management System</h2>
    <br></br>
  </span>
    </div>
  );
}

export default App;
