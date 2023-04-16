import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch.js";

const RecentPublicationsPapers = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const { data, loading, error } = useFetch(`/server/projects/find/${id}`);

  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="container">
          <h2 className="header">{data && data.name}</h2>
          <div className="list">
            {data &&
              data.papers &&
              data.papers.map((elem, index) => {
                return (
                  <div className="listItem" key={index}>
                    <Link to={`/recentPublications/papers/${elem._id}`}>
                      <h2 className="paperTitle">{elem.name}</h2>
                    </Link>
                    <span>
                      <b>Authors:</b>
                      {elem.authors.map((author, index) => {
                        return (
                          <span key={index}>
                            {(index ? ", " : "") + author}
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

export default RecentPublicationsPapers;
