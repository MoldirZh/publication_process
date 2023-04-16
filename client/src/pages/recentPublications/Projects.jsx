import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

const RecentPublications = () => {
  const { data, loading, error } = useFetch(
    "/server/projects/recentPublications"
  );

  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="container">
          <h2 className="header">Recent Publications</h2>
          <div className="list">
            {data &&
              data.map((elem, index) => {
                return (
                  <div className="listItem" key={index}>
                    <Link to={`/recentPublications/project/${elem._id}`}>
                      <h2 className="projectTitle">{elem.name}</h2>
                    </Link>
                    <span className="projectEditors">
                      <b>Editors:</b>
                      {elem.editors.map((editor, index) => {
                        return (
                          <span key={index}>
                            {(index ? ", " : "") + editor.username}
                          </span>
                        );
                      })}
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
