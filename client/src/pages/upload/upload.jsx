import React, { useState } from "react";
import "./upload.css";
import useFetch from "../../hooks/useFetch.js";
import ModalWindow from "./UploadNewWorkModal";
import ModalCopyrightForm from "./UploadCopyrightForm";
import Navbar from "../../components/navbar/Navbar";

function Upload() {
  const { data, loading, error } = useFetch("/server/papers");

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCopyrightModalOpen, setIsCopyrightModalOpen] = useState(false);
  const openPdf = (data) => {
    window.open(data.pdfFile, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="uploads">
        <div className="uploadleft">
          <table id="uploadTable">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Authors</th>
              <th>Progress</th>
              <th>Open file</th>
            </tr>
            {data &&
              data.map((elem) => {
                return (
                  <tr key={elem._id}>
                    <td>{elem.name}</td>
                    <td>{elem.desc}</td>
                    <th>{elem.authors}</th>
                    <td>{elem.status}</td>
                    <td>
                      <button onClick={() => openPdf(elem)}>Open</button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
        <div className="uploadright">
          <div>
            <button className="buttonNewInvitations">New Invitations</button>
          </div>
          <div className="uploadNews">
            <ul>
              <li>Editor XXX has sent you a project for consideration</li>
              <li>Editor YYY approved your work for the Project Y</li>
              <li>Editor ZZZ left a comment on your work for the Project Z</li>
            </ul>
          </div>

          <div className="uploadForm">
            <h1>Upload New Work</h1>
            <br></br>
            <h2 style={{ textAlign: "center" }}>
              {" "}
              Works can be uploaded in different formats, including PDF, Word,
              LaTeX
            </h2>
            <ModalWindow
              isUploadModalOpen={isUploadModalOpen}
              setIsUploadModalOpen={setIsUploadModalOpen}
            />
          </div>

          <div className="submitForm">
            <ModalCopyrightForm
              isCopyrightModalOpen={isCopyrightModalOpen}
              setIsCopyrightModalOpen={setIsCopyrightModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
