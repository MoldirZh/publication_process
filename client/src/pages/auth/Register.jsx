import React, { useState, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./loginRegister.css";
import axios from "axios";
import loginRegisterImg from "../../images/loginRegister.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const [errorMsg, setErrorMsg] = useState("");

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setErrorMsg("");
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const register = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/server/auth/register", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      if (err.response.data.message.includes("validation"))
        setErrorMsg("Fill all the fields");
      else if (err.response.data.message.includes("duplicate"))
        setErrorMsg("The username or email is not unique");
      else setErrorMsg("Error");
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="leftWrapper">
          <h1>REGISTRATION</h1>
          <input
            required
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
          />
          <input
            required
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
          {errorMsg !== "" && <div className="errorMsg">{errorMsg}</div>}
          <button disabled={loading} onClick={register}>
            Register
          </button>
          <div className="divider">OR</div>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
        <div className="rightWrapper">
          <img src={loginRegisterImg} alt="Register"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
