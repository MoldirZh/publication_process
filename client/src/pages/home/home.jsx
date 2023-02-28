import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="homeContainer">
          <div className="homeImgContainer">
            <img
              src={require("../../images/homeImg2.png")}
              className="homeImg"
            />
          </div>
          <button onClick={() => navigate("/projects")}>
            SHOW RECENT PUBLISHED WORKS
          </button>
          <div className="servicesWrapper">
            <div className="servicesTitle">
              <h1>SERVICES WE PROVIDE</h1>
            </div>
            <div className="servicesList">
              <div className="serviceItem">
                <img
                  src={require("../../images/service1.png")}
                  alt=""
                  className="serviceImg"
                />
                <span className="serviceName">Author-editor communication</span>
              </div>
              <div className="serviceItem">
                <img
                  src={require("../../images/service2.png")}
                  alt=""
                  className="serviceImg"
                />
                <span className="serviceName">Easy upload for the authors</span>
              </div>
              <div className="serviceItem">
                <img
                  src={require("../../images/service3.png")}
                  alt=""
                  className="serviceImg"
                />
                <span className="serviceName">
                  Checking works online for editors
                </span>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
