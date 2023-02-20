import React from "react";
import "../Styles/App.css";
import "../Styles/HomePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/login ");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default HomePage;
