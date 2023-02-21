import React, { useState } from "react";
import Modal from "react-modal";
import { useStyles } from "../../hooks/useStyles";
import "./upload.css";

const ModalWindow = () => {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [uploadName, setUploadName] = useState("");
  const [uploadDesc, setUploadDesc] = useState("");
  const [uploadAuthors, setUploadAuthors] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", uploadName);
    formData.append("desc", uploadDesc);
    formData.append("desc", uploadAuthors);
    formData.append("pdfFile", uploadedFile);
    console.log(formData);
  };

  return (
    <div>
      <button className="buttonUpload" onClick={() => setModalIsOpen(true)}>
        Upload New Work
      </button>
      <Modal
        className={classes.root}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
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
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
