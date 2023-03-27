import React, { useState } from "react";
import useFetch from "../../hooks/useFetch.js";
// import ModalWindow from "./UploadNewWorkModal";
import Navbar from "../../components/navbar/Navbar";
import "./author.css";
import { useNavigate } from "react-router-dom";



function Author() {
  const { data, loading, error } = useFetch("/server/papers");

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCopyrightModalOpen, setIsCopyrightModalOpen] = useState(false);
  const openPdf = (data) => {
    window.open(data.pdfFile, "_blank");
  };
  let navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="author">
        <div className="tablePart">
            {/* <h2>New Invitations</h2>
            <h3 style={{fontWeight:"normal"}}>Click to edit the status of the project</h3> */}
            <br/>
            <button className="newInvitations" onClick={() => navigate("/newInvitations")}>New Invitations</button>
          <table id="table">
            <tr>
              <th>Project#</th>
              <th>Name</th>
              <th>Editors</th>
              <th>Progress</th>
              {/* <th>Open file</th> */}
            </tr>
            <tr>
              <td>1</td>
              <td>Name</td>
              <td>Editors</td>
              <td>Progress</td>
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

export default Author;
