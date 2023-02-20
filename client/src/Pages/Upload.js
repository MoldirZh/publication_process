import React, { useState } from "react";
import "../Styles/App.css";
import "../Styles/Upload.css";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { storage } from "../utils/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Upload() {
  const { data, loading, error } = useFetch("api/papers");
  const [uploadName, setUploadName] = useState("");
  const [uploadDesc, setUploadDesc] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleNameChange = (e) => {
    setUploadName(e.target.value);
  };

  const handleDescChange = (e) => {
    setUploadDesc(e.target.value);
  };

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();

    if (uploadedFile == null) return;

    const fileRef = ref(storage, `papers/${uploadedFile + v4()}`);

    uploadBytes(fileRef, uploadedFile).then(() => {
      getDownloadURL(fileRef).then((url) => {
        const formData = new FormData();
        formData.append("name", uploadName);
        formData.append("desc", uploadDesc);
        formData.append("pdfFile", url);
        axios
          .post("/api/papers", formData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  };

  return (
    <div className="upload">
      <div className="uploadleft">
        <table id="uploadTable">
          <thead>
            <tr>
              <td>Works</td>
              <td>Progress</td>
            </tr>
          </thead>
          <tbody>
            {data.map((elem) => {
              return (
                <tr key={elem._id}>
                  <td>
                    Work 1 <br />
                    Name: {elem.name}
                  </td>
                  <td>{elem.status}</td>
                </tr>
              );
            })}
          </tbody>
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
          <h2>
            {" "}
            Works can be uploaded in different formats, including PDF, Word,
            LaTeX
          </h2>
          <form onSubmit={handleUploadSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={uploadName}
                onChange={handleNameChange}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="desc"
                value={uploadDesc}
                onChange={handleDescChange}
              />
            </label>
            <label>
              Upload file:
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                accept="application/pdf, .doc, .docx, .zip"
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {/* <input
            className="input"
            // style=""
            type="file"
            name="file_upload"
            onChange={onFileChange}
            accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex, .zip"
          />
          <input
            className="input"
            // style=""
            type="file"
            name="file_upload"
            onChange={onFileChange}
            accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex, .zip"
          />
          <button className="buttonUpload">Upload</button> */}
        </div>
        {/* <div className="submitForm">
          <h1>Submit Copyright form</h1>
          <input
            type="file"
            name="file_upload"
            onChange={onFileChange}
            accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
          />
          <button className="buttonSubmit">Submit Copyright form</button>
        </div> */}
      </div>
    </div>
  );
}

export default Upload;
