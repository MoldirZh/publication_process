import React, { useEffect, useState } from "react";
import axios from "axios";
import { Popup } from "devextreme-react/popup";

import { storage } from "../../utils/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const ModalWindow = (props) => {
  const { isPopupVisible, setIsPopupVisible, projectId } = props;

  const [uploadData, setUploadData] = useState({
    name: undefined,
    abstract: undefined,
    authors: undefined,
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    pdfFile: null,
    sourceFile: null,
    copyrightFile: null,
  });

  const handleChange = async (e) => {
    setUploadData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFileChange = async (e) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [e.target.id]: e.target.files[0],
    }));
  };

  let locArr = [
    {
      file: uploadedFiles.pdfFile,
      route: "papers",
    },
    {
      file: uploadedFiles.sourceFile,
      route: "sources",
    },
    {
      file: uploadedFiles.copyrightFile,
      route: "copyrights",
    },
  ];

  const uploadFile = function (file, route) {
    return new Promise(function (resolve, reject) {
      if (file == null) return;

      const fileRef = ref(storage, `${route}/${file + v4()}`);
      uploadBytes(fileRef, file)
        .then(() => {
          getDownloadURL(fileRef)
            .then((url) => {
              resolve(url);
            })
            .catch((error) => {
              console.log("error", error);
            });
        })
        .catch((error) => {
          console.log("err", error);
        });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Promise.all(locArr.map((elem) => uploadFile(elem.file, elem.route)))
      .then((values) => {
        const [pdfUrl, sourceUrl, copyrightUrl] = values;
        const pdfUrlObj = { pdfFile: pdfUrl };
        const sourceUrlObj = { sourceFile: sourceUrl };
        const copyrightUrlObj = { copyrightFile: copyrightUrl };
        let newData = {
          ...uploadData,
          ...pdfUrlObj,
          ...sourceUrlObj,
          ...copyrightUrlObj,
        };
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
      })
      .catch((error) => {
        console.error(error.message);
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
          <label htmlFor="abstract">Abstract: </label>
          <textarea
            required
            type="text"
            id="abstract"
            name="abstract"
            className="modalInput"
            onChange={handleChange}
            rows="4"
          ></textarea>
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
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="sourceFile">Source file: </label>
          <input
            required
            type="file"
            id="sourceFile"
            name="sourceFile"
            className="modalInput"
            accept=".zip, .tex"
            onChange={handleFileChange}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="sourceFile">Copyright: </label>
          <input
            required
            type="file"
            id="copyrightFile"
            name="copyrightFile"
            className="modalInput"
            accept="application/pdf"
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
