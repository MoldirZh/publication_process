import React, { useState } from "react";
import "./papers.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch.js";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import InviteUser from "./InviteUserPopup";
import UploadPaperModal from "./UploadPaperPopup";

const Papers = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [isInvitePopupVisible, setIsInvitePopupVisible] = useState(false);
  const [isUploadPopupVisible, setIsUploadPopupVisible] = useState(false);

  const { data, loading, error } = useFetch(`/server/projects/find/${id}`);

  const openPdf = (data) => {
    window.open(data.pdfFile, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="container">
          <h2 className="header">Papers</h2>
          <div className="buttonsContainer">
            <button
              className="inviteUserBtn"
              onClick={() => setIsInvitePopupVisible(true)}
            >
              Invite user
            </button>
            <button
              className="uploadPaperBtn"
              onClick={() => setIsUploadPopupVisible(true)}
            >
              Upload paper
            </button>
          </div>
          <InviteUser
            isPopupVisible={isInvitePopupVisible}
            setIsPopupVisible={setIsInvitePopupVisible}
            projectId={id}
          />
          <UploadPaperModal
            isPopupVisible={isUploadPopupVisible}
            setIsPopupVisible={setIsUploadPopupVisible}
            projectId={id}
          />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Authors</th>
                <th>Progress</th>
                <th>Open file</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Papers;
