import React from "react";
import "./projects.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projects">
        <div className="projectsContainer">
          <h1 className="projectsHeader">My Projects</h1>
          <table id="projectsTable">
            <tr>
              <th>Project #</th>
              <th>Name</th>
              <th>Editors</th>
              <th>Progress</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Some name</td>
              <td>XXX, YYY</td>
              <td>Accepted</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Some name 2</td>
              <td>XXX, YYY</td>
              <td>In progress</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
