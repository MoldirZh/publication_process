import React, { useState } from "react";
import Modal from "react-modal";
import { useStyles } from "../../hooks/useStyles";
import "./upload.css";

const ModalCopyrightForm = () => {
  const classes = useStyles();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <div>
      <button className="buttonUpload" onClick={() => setModalIsOpen(true)}>
        Upload Copyright Form
      </button>
      <Modal
        className={classes.root}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Upload your Copyright form here:</h2>
        <div>
          <input
            className="input"
            type="file"
            name="file_upload"
            onChange={(e) => setUploadedFile(e.target.files[0])}
            accept="application/pdf, .doc, .docx"
          />
        </div>
        <button className={classes.buttons}>Upload</button>

        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCopyrightForm;
