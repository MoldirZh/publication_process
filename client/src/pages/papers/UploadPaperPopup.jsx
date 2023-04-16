import React, { useState } from "react";
import axios from "axios";
import { Popup } from "devextreme-react/popup";

import { storage } from "../../utils/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const ModalWindow = (props) => {
  const { isPopupVisible, setIsPopupVisible, projectId } = props;

  const [uploadData, setUploadData] = useState({
    name: undefined,
    desc: undefined,
    authors: undefined,
  });

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChange = async (e) => {
    setUploadData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFileChange = async (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (uploadedFile == null) return;

    const fileRef = ref(storage, `papers/${uploadedFile + v4()}`);

    uploadBytes(fileRef, uploadedFile)
      .then(() => {
        getDownloadURL(fileRef).then((url) => {
          const pdfUrl = { pdfFile: url };
          let newData = { ...uploadData, ...pdfUrl };
          axios
            .post(`/server/papers/${projectId}`, newData)
            .then((res) => {
              console.log("res", res);
              setIsPopupVisible(false);
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((error) => {
        console.log("err", error);
      });
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const renderContent = () => {
    return (
      <form onSubmit={handleSubmit} className="modalContainer">
        <div className="modalItem">
          <label htmlFor="name">Name of the work: </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="modalInput"
            onChange={handleChange}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="desc">Description: </label>
          <input
            required
            type="text"
            id="desc"
            name="desc"
            className="modalInput"
            onChange={handleChange}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="authors">Authors: </label>
          <input
            required
            type="text"
            id="authors"
            name="authors"
            className="modalInput"
            onChange={handleChange}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="pdfFile">PDF file: </label>
          <input
            required
            type="file"
            id="pdfFile"
            name="pdfFile"
            className="modalInput"
            accept="application/pdf" //, .doc, .docx, .zip"
            onChange={handleFileChange}
          />
        </div>
        <input type="submit" value="Upload paper" className="modalButton" />
      </form>
    );
  };

  return (
    <Popup
      id="popup"
      width={500}
      height="auto"
      showTitle={true}
      title="Write details about the paper:"
      visible={isPopupVisible}
      onHiding={togglePopup}
      hideOnOutsideClick={true}
      contentRender={renderContent}
    ></Popup>
  );
};

export default ModalWindow;
