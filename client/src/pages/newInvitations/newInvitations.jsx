import React, { useState } from "react";
import useFetch from "../../hooks/useFetch.js";
// import ModalWindow from "./UploadNewWorkModal";
import Navbar from "../../components/navbar/Navbar";
import "./newInvitations.css";


function NewInvitations() {
  const { data, loading, error } = useFetch("/server/papers");

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCopyrightModalOpen, setIsCopyrightModalOpen] = useState(false);
  const openPdf = (data) => {
    window.open(data.pdfFile, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="newInvitations">
        <div className="tablePart">
            {/* <h2>New Invitations</h2>
            <h3 style={{fontWeight:"normal"}}>Click to edit the status of the project</h3>
            <br/> */}
            {/* <button >aa</button> */}
          <table id="uploadTable">
            <tr>
              <th>No.</th>
              <th>Paper Name</th>
              <th>Editors</th>
              <th>Progress</th>
              {/* <th>Open file</th> */}
            </tr>
            {data &&
              data.map((elem) => {
                return (
                  <tr key={elem._id}>
                    <td>{elem.name}</td>
                    <td>{elem.desc}</td>
                    <th>{elem.authors}</th>
                    <td>{elem.status}</td>
                    <td>
                      <button onClick={() => openPdf(elem)}>Open</button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      
      </div>
    </div>
  );
}

export default NewInvitations;
