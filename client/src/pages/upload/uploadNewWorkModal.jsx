import React, { useState } from "react";
import Modal from "react-modal";
import { useStyles } from "../../hooks/useStyles";
import "./upload.css";
import axios from "axios";

import { storage } from "../../utils/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const ModalWindow = (props) => {
  const classes = useStyles();
  const { isUploadModalOpen, setIsUploadModalOpen } = props;

  const [uploadName, setUploadName] = useState("");
  const [uploadDesc, setUploadDesc] = useState("");
  const [uploadAuthors, setUploadAuthors] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (uploadedFile == null) return;

    const fileRef = ref(storage, `papers/${uploadedFile + v4()}`);

    uploadBytes(fileRef, uploadedFile).then(() => {
      getDownloadURL(fileRef).then((url) => {
        const formData = new FormData();
        formData.append("name", uploadName);
        formData.append("desc", uploadDesc);
        formData.append("authors", uploadAuthors);
        formData.append("pdfFile", url);
        axios
          .post("/server/papers", formData)
          .then((res) => {
            setIsUploadModalOpen(false);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  };

  return (
    <div>
      <button
        className="buttonUpload"
        onClick={() => setIsUploadModalOpen(true)}
      >
        Upload New Work
      </button>
      <Modal
        className={classes.root}
        ariaHideApp={false}
        isOpen={isUploadModalOpen}
        onRequestClose={() => setIsUploadModalOpen(false)}
      >
        <h2>Upload your work here:</h2>
        <div className={classes.inputs}>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Name of the work</h3>
              <input
                type="text"
                placeholder="Name of the Work"
                value={uploadName}
                onChange={(e) => {
                  setUploadName(e.target.value);
                }}
              />
            </div>
            <div>
              <h3>Description</h3>
              <input
                type="text"
                placeholder="Description"
                value={uploadDesc}
                onChange={(e) => {
                  setUploadDesc(e.target.value);
                }}
              />
            </div>
            <div>
              <h3>Authors</h3>
              <input
                type="text"
                placeholder="Authors"
                value={uploadAuthors}
                onChange={(e) => {
                  setUploadAuthors(e.target.value);
                }}
              />
            </div>
            <input
              className="input"
              type="file"
              name="file_upload"
              onChange={(e) => setUploadedFile(e.target.files[0])}
              accept="application/pdf, .doc, .docx, .zip"
            />
            <input type="submit" className={classes.buttons} />
          </form>
        </div>
        {/* <button className={classes.buttons}>Upload PDF</button> */}
        {/* <button className={classes.buttons}>Upload Original</button> */}

        <div>
          <button onClick={() => setIsUploadModalOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
