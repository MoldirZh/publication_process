import React, { useState } from "react";
import Modal from "react-modal";
import { useStyles } from "../../hooks/useStyles";
import "./upload.css";

const ModalWindow = () => {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nameOfTheWork, setNameOfTheWork] = useState("");
  const [description, setDescription] = useState("");
  const [authors, setAuthors] = useState("");
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <button className="buttonUpload" onClick={() => setModalIsOpen(true)}>
        Upload New Work
      </button>
      <Modal
        className={classes.root}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Upload your work here:</h2>
        <div className={classes.inputs}>
          <div>
            <h3>Name of the work</h3>
            <input
              type="text"
              placeholder="Name of the Work"
              onChange={(e) => {
                setNameOfTheWork(e.target.value);
              }}
            />
          </div>
          <div>
            <h3>Description</h3>
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div>
            <h3>Authors</h3>
            <input
              type="text"
              placeholder="Authors"
              onChange={(e) => {
                setAuthors(e.target.value);
              }}
            />
          </div>
          <input
            className="input"
            type="file"
            name="file_upload"
            onChange={onFileChange}
            accept="application/pdf, .doc, .docx, .zip"
          />
        </div>
        <button className={classes.buttons}>Upload PDF</button>
        <button className={classes.buttons}>Upload Original</button>

        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
