import React, { useState, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./loginRegister.css";
import axios from "axios";
import loginRegister from "../../images/loginRegister.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [errorMsg, setErrorMsg] = useState("");

  const { loading, error, dispatch } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/server/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      setErrorMsg(err.response.data.message);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="leftWrapper">
          <h1>LOGIN</h1>
          <input
            type="text"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
          {errorMsg !== "" && <div className="errorMsg">{errorMsg}</div>}
          <button disabled={loading} onClick={handleClick}>
            Login
          </button>
          <div className="divider">OR</div>
          <button onClick={() => navigate("/register")}>Sign up</button>
        </div>
        <div className="rightWrapper">
          <img src={loginRegister} alt="Login"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
