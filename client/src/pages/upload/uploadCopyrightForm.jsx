import React, { useState } from "react";
import Modal from "react-modal";
import { useStyles } from "../../hooks/useStyles";
import "./upload.css";
import axios from "axios";

import { storage } from "../../utils/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const ModalCopyrightForm = (props) => {
  const classes = useStyles();
  const { isCopyrightModalOpen, setIsCopyrightModalOpen } = props;

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (uploadedFile == null) return;

    const fileRef = ref(storage, `copyright/${uploadedFile + v4()}`);

    uploadBytes(fileRef, uploadedFile).then(() => {
      getDownloadURL(fileRef).then((url) => {
        console.log(url);
        // axios
        //   .put("/server/papers", {
        //     copyright: url,
        //   })
        //   .then((res) => {
        //     console.log(res);
        //     setIsCopyrightModalOpen(false);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      });
    });
  };

  return (
    <div>
      <button
        className="buttonUpload"
        onClick={() => setIsCopyrightModalOpen(true)}
      >
        Upload Copyright Form
      </button>
      <Modal
        className={classes.root}
        ariaHideApp={false}
        isOpen={isCopyrightModalOpen}
        onRequestClose={() => setIsCopyrightModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
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
        </form>

        <div>
          <button onClick={() => setIsCopyrightModalOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCopyrightForm;
