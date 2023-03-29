import "./recentPublications.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

import React from "react";

const RecentPublications = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="projects">
        <div className="projectsContainer">
          <h1 className="projectsHeader">Recent Publications</h1>
          <div className="projectsList">
            <div className="projectItem">
              <h2 className="projectTitle">
                Proceedings of V XoveTIC Conference. XoveTIC 2022
              </h2>
              <span className="projectEditors">
                Editors: Alvaro Leitao and Lucía Ramos
              </span>
            </div>
            <div className="projectItem">
              <h2 className="projectTitle">
                Proceedings of V XoveTIC Conference. XoveTIC 2022
              </h2>
              <span className="projectEditors">
                Editors: Alvaro Leitao and Lucía Ramos
              </span>
            </div>
            <div className="projectItem">
              <h2 className="projectTitle">
                Proceedings of V XoveTIC Conference. XoveTIC 2022
              </h2>
              <span className="projectEditors">
                Editors: Alvaro Leitao and Lucía Ramos
              </span>
            </div>
            <div className="projectItem">
              <h2 className="projectTitle">
                Proceedings of V XoveTIC Conference. XoveTIC 2022
              </h2>
              <span className="projectEditors">
                Editors: Alvaro Leitao and Lucía Ramos
              </span>
            </div>
            <div className="projectItem">
              <h2 className="projectTitle">
                Proceedings of V XoveTIC Conference. XoveTIC 2022
              </h2>
              <span className="projectEditors">
                Editors: Alvaro Leitao and Lucía Ramos
              </span>
            </div>
            <div className="projectItem">
              <h2 className="projectTitle">
                Proceedings of V XoveTIC Conference. XoveTIC 2022
              </h2>
              <span className="projectEditors">
                Editors: Alvaro Leitao and Lucía Ramos
              </span>
            </div>
            <div className="projectItem">
              <h2 className="projectTitle">
                Proceedings of V XoveTIC Conference. XoveTIC 2022
              </h2>
              <span className="projectEditors">
                Editors: Alvaro Leitao and Lucía Ramos
              </span>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RecentPublications;
