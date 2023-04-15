import React, { useState, useContext } from "react";
import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CreateProjectModal from "./CreateProjectModal";
import useFetch from "../../hooks/useFetch.js";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Projects = () => {
  const { user } = useContext(AuthContext);
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] =
    useState(false);

  const { data, loading, error } = useFetch(
    `/server/projects/getUserProjects?userid=${user._id}`
  );
  console.log("getUserProjects", data);

  return (
    <div>
      <Navbar />
      <div className="projects">
        <div className="projectsContainer">
          <h1 className="projectsHeader">My Projects</h1>
          <button
            className="createProjectBtn"
            onClick={() => setIsCreateProjectModalOpen(true)}
          >
            Create Project
          </button>
          <CreateProjectModal
            isCreateProjectModalOpen={isCreateProjectModalOpen}
            setIsCreateProjectModalOpen={setIsCreateProjectModalOpen}
          />
          <table id="projectsTable">
            <tr>
              <th>Project #</th>
              <th>Name</th>
              <th>Editors</th>
              <th>Progress</th>
            </tr>
            {data &&
              data.map(function (item, index) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/projects/${item._id}`}>{item.name}</Link>
                    </td>
                    <td>{item.editors[0].username}</td>
                    <td>{item.progress}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
