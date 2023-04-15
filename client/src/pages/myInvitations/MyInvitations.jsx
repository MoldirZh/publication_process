import React, { useState, useContext } from "react";
import "./myInvitations.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch.js";
import { AuthContext } from "../../context/AuthContext";
import ViewInvitationModal from "./ViewInvitationModal";

const MyInvitations = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch(
    `/server/invitations/getUserInvitations?userid=${user._id}`
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invitationItem, setInvitationItem] = useState(undefined);

  return (
    <div>
      <Navbar />
      <div className="invitations">
        <div className="invitationsContainer">
          <h1 className="invitationsHeader">My invitations</h1>
          <ViewInvitationModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            item={invitationItem}
          />
          <table id="invitationsTable">
            <tr>
              <th>Invitation #</th>
              <th>From</th>
              <th>Message</th>
              <th>Project</th>
              <th>Status</th>
            </tr>
            {data &&
              data.map(function (item, index) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.from.username}</td>
                    <td>{item.message}</td>
                    <td>{item.project.name}</td>
                    <td
                      onClick={() => {
                        setInvitationItem(item);
                        setIsModalOpen(true);
                      }}
                    >
                      {item.status}
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyInvitations;
