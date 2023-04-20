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
      elem.status === "Submitted" || elem.status === "Rejected"
        ? await axios.put(`/server/papers/${elem._id}`, {
            status: "Approved",
          })
        : await axios.put(`/server/papers/${elem._id}`, {
            status: "Rejected",
          });
      window.location.reload();
    }
  };

  const completeProject = async () => {
    await axios.put(`/server/projects/${id}`, {
      progress: "Completed",
    });
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="container">
          <h2 className="header">Papers</h2>
          <div className="userManual">
            <p>You have opened a project.</p>
            <br />
            {isEditor && (
              <>
                <p>
                  You can invite users by clicking on the “Invite Users” button.
                </p>
                <br />
              </>
            )}
            <p>Please upload a paper using the "Upload paper" button.</p>
            <br />
            {isEditor && (
              <>
                <p>
                  Once all the papers are submitted and approved, you can
                  complete the project using the "Complete project" button
                </p>
                <br />
              </>
            )}
            The papers have the following statuses:
            <ul>
              <li>
                <b>Submitted</b> - the paper was uploaded, but not yet checked
                by the editors.
              </li>
              <li>
                <b>Approved</b> - the paper was approved by the editors.
              </li>
              <li>
                <b>Rejected</b> - the paper was rejected by the editors. The
                paper needs to be revised and uploaded again.
              </li>
            </ul>
            {isEditor && (
              <>
                <br />
                You can approve or reject a paper by clicking on the status of
                the paper.
              </>
            )}
          </div>

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
            {data && data.progress !== "Completed" && isEditor && (
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
                <th>#</th>
                <th>Name</th>
                <th>Authors</th>
                <th>Open PDF</th>
                <th>Download source file</th>
                <th>Open copyright</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {data.papers &&
                data.papers.map((elem, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{elem.name}</td>
                      <td>{elem.authors}</td>
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
                      <td>
                        <span
                          className={`${elem.status} ${isEditor}`}
                          onClick={() => onStatusClick(elem)}
                        >
                          {elem.status}
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

export default Papers;
