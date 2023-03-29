import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch.js";
import "./recentPublicationsPapers.css";

const RecentPublicationsPapers = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  console.log("project", id);

  const { data, loading, error } = useFetch(`/server/projects/find/${id}`);

  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="project">
        <div className="projectContainer">
          <h1 className="projectHeader">{data && data.name}</h1>
          <div className="papersList">
            {data &&
              data.papers &&
              data.papers.map((elem) => {
                return (
                  <div className="paperItem">
                    <Link to={`/recentPublications/paper/${elem}`}>
                      <h2 className="projectTitle">{elem}</h2>
                    </Link>
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

export default RecentPublicationsPapers;
