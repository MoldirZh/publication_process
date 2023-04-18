import React, { useState, useContext } from "react";
import "./papers.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch.js";
import { AuthContext } from "../../context/AuthContext";
import { useLocation } from "react-router-dom";
import InviteUser from "./InviteUserPopup";
import UploadPaperModal from "./UploadPaperPopup";
import axios from "axios";

const Papers = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [isInvitePopupVisible, setIsInvitePopupVisible] = useState(false);
  const [isUploadPopupVisible, setIsUploadPopupVisible] = useState(false);

  const { data, loading, error } = useFetch(`/server/projects/find/${id}`);

  const isEditor =
    data.editors && data.editors.some((editor) => editor._id === user._id);

  const openFile = (elem, fileType) => {
    window.open(elem[fileType], "_blank");
  };

  const onStatusClick = async (elem) => {
    if (isEditor) {
      elem.status == "Submitted" || elem.status == "Rejected"
        ? await axios.put(`/server/papers/${elem._id}`, {
            status: "Approved",
          })
        : await axios.put(`/server/papers/${elem._id}`, {
            status: "Rejected",
          });
      window.location.reload();
    }
  };

  const completeProject = () => {
    console.log("complete");
    //change status to completed
    //generate proceeding, upload it to firebase and update the project db
  };

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="container">
          <h2 className="header">Papers</h2>
          <div className="buttonsContainer">
            {data && isEditor && (
              <button
                className="inviteUserBtn"
                onClick={() => setIsInvitePopupVisible(true)}
              >
                Invite user
              </button>
            )}
            <button
              className="uploadPaperBtn"
              onClick={() => setIsUploadPopupVisible(true)}
            >
              Upload paper
            </button>
          </div>
          <div className="buttonsContainer">
            {data && isEditor && (
              <button className="completeProjectBtn" onClick={completeProject}>
                Complete project
              </button>
            )}
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
                <th>Open PDF</th>
                <th>Download source file</th>
                <th>Open copyright</th>
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
                      <td>
                        <span
                          className={`${elem.status} ${isEditor}`}
                          onClick={() => onStatusClick(elem)}
                        >
                          {elem.status}
                        </span>
                      </td>
                      <td>
                        <button onClick={() => openFile(elem, "pdfFile")}>
                          Open
                        </button>
                      </td>
                      <td>
                        <button onClick={() => openFile(elem, "sourceFile")}>
                          Open
                        </button>
                      </td>
                      <td>
                        <button onClick={() => openFile(elem, "copyrightFile")}>
                          Open
                        </button>
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
