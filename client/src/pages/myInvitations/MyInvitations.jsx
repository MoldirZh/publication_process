import React, { useState, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch.js";
import { AuthContext } from "../../context/AuthContext";
import ViewInvitationPopup from "./ViewInvitationModal";
import "./myInvitations.css";

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
          <div className="userManual">
            <p>
              Here you can view all the invitations that you received. The
              invitations have the following statuses:
            </p>
            <ul>
              <li>
                <b>Awaiting</b> - the invitation is awaiting acceptance or
                rejection.
              </li>
              <li>
                <b>Accepted</b> - the invitation was accepted. You were added to
                the list of the contributors of the project.
              </li>
              <li>
                <b>Rejected</b> - the invitation was rejected.
              </li>
            </ul>
            <br />
            <p>
              You can change the status of the invitation by clicking on the
              status.
            </p>
          </div>
          <ViewInvitationPopup
            isPopupVisible={isPopupVisible}
            setIsPopupVisible={setIsPopupVisible}
            item={invitationItem}
          />
          <table id="invitationsTable">
            <thead>
              <tr>
                <th>#</th>
                <th>From</th>
                <th>Message</th>
                <th>Project</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
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
                        <span className={item.status}>{item.status}</span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyInvitations;
