import React, { useState } from "react";
import "./papers.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch.js";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import InviteUser from "./InviteUser";
import UploadPaperModal from "./UploadPaperModal";

const Papers = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const { data, loading, error } = useFetch(`/server/projects/find/${id}`);

  const openPdf = (data) => {
    window.open(data.pdfFile, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="papers">
        <div className="papersContainer">
          <h1 className="papersHeader">Papers</h1>
          <button
            className="createProjectBtn"
            onClick={() => setIsInviteModalOpen(true)}
          >
            Invite user
          </button>
          <InviteUser
            modalIsOpen={isInviteModalOpen}
            setModalIsOpen={setIsInviteModalOpen}
            projectId={id}
          />
          <button
            className="createProjectBtn"
            onClick={() => setIsUploadModalOpen(true)}
          >
            Upload paper
          </button>
          <UploadPaperModal
            modalIsOpen={isUploadModalOpen}
            setIsModalOpen={setIsUploadModalOpen}
            projectId={id}
          />
          <table id="papersTable">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Authors</th>
              <th>Progress</th>
              <th>Open file</th>
            </tr>
            {data.papers &&
              data.papers.map((elem) => {
                return (
                  <tr key={elem._id}>
                    <td>{elem.name}</td>
                    <td>{elem.desc}</td>
                    <td>{elem.authors}</td>
                    <td>{elem.status}</td>
                    <td>
                      <button onClick={() => openPdf(elem)}>Open</button>
                    </td>
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

export default Papers;
