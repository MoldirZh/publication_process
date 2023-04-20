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
          <div className="userManual">
            <p>
              You can start working on a new project as an editor by clicking on
              the “Create new project” button.
            </p>
            <br />
            <p>The projects have the following statuses:</p>
            <ul>
              <li>
                <b>In progress</b> - when the project is started.
              </li>
              <li>
                <b>Completed</b> - when the project finished and checked by the
                editors.
              </li>
            </ul>
            <br />
            <p>Click on the project's name to see the uploaded papers.</p>
          </div>
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
                <th>#</th>
                <th>Name</th>
                <th>Editors</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(function (item, index) {
                  // In progress/Completed
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
