import React, { useState, useContext } from "react";
import "../../App.css";
import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CreateProjectPopup from "./CreateProjectPopup";
import useFetch from "../../hooks/useFetch.js";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Projects = () => {
  const { user } = useContext(AuthContext);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { data, loading, error } = useFetch(
    `/server/projects/getUserProjects?userid=${user._id}`
  );

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="container">
          <h2 className="header">My Projects</h2>
          <button
            className="createProjectBtn"
            onClick={() => setIsPopupVisible(true)}
          >
            Create Project
          </button>
          <CreateProjectPopup
            isPopupVisible={isPopupVisible}
            setIsPopupVisible={setIsPopupVisible}
          />
          <table>
            <thead>
              <tr>
                <th>Project #</th>
                <th>Name</th>
                <th>Editors</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(function (item, index) {
                  // In progress/Completed
                  console.log(item.progress);
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Link to={`/projects/${item._id}`}>{item.name}</Link>
                      </td>
                      <td>{item.editors[0].username}</td>
                      <td>
                        <span
                          className={
                            item.progress === "In progress"
                              ? "inProgress"
                              : "completed"
                          }
                        >
                          {item.progress}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
