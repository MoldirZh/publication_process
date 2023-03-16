import React, { useContext } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  //const { user } = useContext(AuthContext);
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
        {/* {user ? (
          user.email
        ) : (
          <button className="navButton" onClick={() => navigate("/login")}>
            Login/Sign up
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
