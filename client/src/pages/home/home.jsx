import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import homeImg2 from "../../images/homeImg2.png";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="homeContainer">
          <div className="homeImgContainer">
            <img src={homeImg2} className="homeImg" />
          </div>
          <button
            className="showPublicationsBtn"
            onClick={() => navigate("/recentPublications")}
          >
            SHOW RECENT PUBLISHED WORKS
          </button>
          <div className="servicesWrapper">
            <div className="servicesTitle">
              <h1>SERVICES WE PROVIDE</h1>
            </div>
            <div className="servicesList">
              <div className="serviceItem">
                <img src={service1} alt="" className="serviceImg" />
                <span className="serviceName">Author-editor communication</span>
              </div>
              <div className="serviceItem">
                <img src={service2} alt="" className="serviceImg" />
                <span className="serviceName">Easy upload for the authors</span>
              </div>
              <div className="serviceItem">
                <img src={service3} alt="" className="serviceImg" />
                <span className="serviceName">
                  Checking works online for editors
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
