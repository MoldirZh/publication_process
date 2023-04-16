import React, { useState, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch.js";
import { AuthContext } from "../../context/AuthContext";
import ViewInvitationPopup from "./ViewInvitationModal";

const MyInvitations = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch(
    `/server/invitations/getUserInvitations?userid=${user._id}`
  );

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [invitationItem, setInvitationItem] = useState(undefined);

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="container">
          <h2 className="header">My invitations</h2>
          <ViewInvitationPopup
            isPopupVisible={isPopupVisible}
            setIsPopupVisible={setIsPopupVisible}
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
                        setIsPopupVisible(true);
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
