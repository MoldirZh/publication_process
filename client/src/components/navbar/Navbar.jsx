import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate("/")}>
          Logo
        </span>
        <button className="navButton" onClick={() => navigate("/login")}>
          Login/Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
