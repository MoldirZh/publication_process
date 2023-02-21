import React, { useState } from "react";
import "./upload.css";
import Axios from "axios";
import ModalWindow from "./UploadNewWorkModal";
import ModalCopyrightForm from "./UploadCopyrightForm";
import Navbar from "../../components/navbar/Navbar";

function Upload() {
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
  };

  const [nameOfTheWork, setNameOfTheWork] = useState("");
  const [description, setDescription] = useState("");
  const [authors, setAuthors] = useState("");

  return (
    <div>
      <Navbar />
      <div className="uploads">
        <div className="uploadleft">
          {/* Works */}
          <table id="uploadTable">
            <tr>
              <td>Works</td>
              <td>Progress</td>
            </tr>
            <tr>
              <td>
                Work # <br />
                Name:
              </td>
              <td>In progress</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
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
            {/* <input
                        className='input'
                        // style=""
                        type="file"
                        name="file_upload"
                        onChange={onFileChange}
                        accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
                    />
                    <button class="buttonUpload">Upload</button> */}
            {/* <button class="buttonUpload" onClick={()=>setOpenPopup(true)}>Upload New Work</button> */}
            <ModalWindow></ModalWindow>
          </div>

          <div></div>

          <div className="submitForm">
            {/* <input
                type="file"
                name="file_upload"
                onChange={onFileChange}
                accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
            />
            <button class="buttonSubmit">Upload Copyright form</button> */}
            <ModalCopyrightForm></ModalCopyrightForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
