import React, { useState } from "react";
import "./loginRegister.css";
import Axios from "axios";
import loginRegister from "../../images/loginRegister.png";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://127.0.0.1:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };

  return (
    <div className="container">
      <div className="leftWrapper">
        <h1>LOGIN</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <div className="divider">OR</div>
        <button onClick={() => navigate("/register")}>Sign up</button>
      </div>
      <div className="rightWrapper">
        <img src={loginRegister} alt="Login image"></img>
      </div>
    </div>
  );
}

export default Login;
