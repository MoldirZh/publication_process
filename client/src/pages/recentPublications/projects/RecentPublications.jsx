import React, { useEffect } from "react";
import "./recentPublications.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch.js";

const RecentPublications = () => {
  const { data, loading, error } = useFetch(
    "/server/projects/recentPublications"
  );

  console.log(data);

  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="projects">
        <div className="projectsContainer">
          <h1 className="projectsHeader">Recent Publications</h1>
          <div className="projectsList">
            {data &&
              data.map((elem) => {
                return (
                  <div className="projectItem">
                    <Link to={`/recentPublications/project/${elem._id}`}>
                      <h2 className="projectTitle">{elem.name}</h2>
                    </Link>
                    <span className="projectEditors">
                      Editors: Alvaro Leitao and Lucía Ramos
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecentPublications;
