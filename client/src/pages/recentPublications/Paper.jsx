import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch.js";
import "./paper.css";

const RecentPublicationsPaper = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const { data, loading, error } = useFetch(`/server/papers/${id}`);
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="container">
          <div className="paperContainer">
            {data && (
              <>
                <h1 className="paperHeader">{data.name}</h1>
                <div className="paperDetails">
                  <span>
                    <b>Authors:</b>
                    {data.authors &&
                      data.authors.map((author, index) => {
                        return (
                          <span key={index}>
                            {(index ? ", " : "") + author}
                          </span>
                        );
                      })}
                  </span>
                  <button
                    className="openPdfBtn"
                    onClick={() => window.open(data.pdfFile, "_blank")}
                  >
                    Open PDF
                  </button>
                  <h3>Abstract: </h3>
                  <div className="paperDesc">{data.abstract}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecentPublicationsPaper;
