import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch.js";
import "./recentPublicationsPaper.css";

const RecentPublicationsPaper = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const { data, loading, error } = useFetch(`/server/papers/${id}`);

  return (
    <div>
      <Navbar />
      <div className="paper">
        <div className="paperContainer">
          {data && (
            <>
              <h1 className="paperHeader">{data.name}</h1>
              <div className="paperDesc">{data.desc}</div>
              <div className="paperStatus">{data.status}</div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecentPublicationsPaper;
