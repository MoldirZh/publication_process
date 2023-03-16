import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./loginRegister.css";
import axios from "axios";
import loginRegister from "../../images/loginRegister.png";

function Register() {
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    axios
      .post("http://127.0.0.1:3001/register", {
        firstName: firstNameReg,
        lastName: lastNameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="leftWrapper">
          <h1>REGISTRATION</h1>
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => {
              setFirstNameReg(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => {
              setLastNameReg(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <button onClick={register}>Register</button>
        </div>
        <div className="rightWrapper">
          <img src={loginRegister} alt="Register image"></img>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Register;
