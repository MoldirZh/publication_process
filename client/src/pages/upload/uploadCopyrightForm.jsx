import React, { useState } from "react";
import Modal from "react-modal";
import { makeStyles } from "@mui/styles";
import "./upload.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignitems: "center",
    boxSizing: "border-box",
    position: "absolute",
    width: "700px",
    height: "550px",
    left: "25%",
    right: "20%",
    top: "15%",
    bottom: "5%",
    background: "#FFFFFF",
    border: "3px solid #EDEDED",
    paddingLeft: "70px",
    paddingRight: "70px",
  },
  buttons: {
    backgroundColor: "#6F38C5",
    color: "white",
    height: "30px",
    borderRadius: "15.08px",
  },
}));

const ModalCopyrightForm = () => {
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
            // style=""
            type="file"
            name="file_upload"
            onChange={onFileChange}
            accept="application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .tex"
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
