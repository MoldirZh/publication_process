import React, { useState } from "react";
import Modal from "react-modal";
//import { useStyles } from "../../hooks/useStyles";
import "./upload.css";

const ModalCopyrightForm = () => {
  //const classes = useStyles();
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
        Upload Copyright Form
      </button>
      <Modal
        //className={classes.root}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Upload your Copyright form here:</h2>
        <div>
          <input
            className="input"
            // style=""
            type="file"
            name="file_upload"
            onChange={onFileChange}
            accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
          />
        </div>
        <button
        //className={classes.buttons}
        >
          Upload
        </button>

        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCopyrightForm;
