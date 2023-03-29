import React, { useContext, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Profile from "../../pages/profile/Profile";

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const { user } = useContext(AuthContext);
  let navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const logout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate("/")}>
          Logo
        </span>
        {user ? (
          <>
            <div
              className="userButton"
              onClick={() => setOpenDropDown(!openDropDown)}
            >
              {user.username}
            </div>
            {openDropDown && (
              <div className="dropDown">
                <div
                  className="dropDownItem"
                  onClick={() => navigate("/profile")}
                >
                  My Profile
                </div>
                <div
                  className="dropDownItem"
                  onClick={() => navigate("/projects")}
                >
                  My Projects
                </div>
                <div className="dropDownItem" onClick={logout}>
                  Log out
                </div>
              </div>
            )}
          </>
        ) : (
          <button className="navButton" onClick={() => navigate("/login")}>
            Login/Sign up
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
