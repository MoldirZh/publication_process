import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Popup } from "devextreme-react/popup";

const ModalWindow = (props) => {
  const { isPopupVisible, setIsPopupVisible } = props;
  const { user } = useContext(AuthContext);

  const [invitationData, setinvitationData] = useState({
    from: user?._id,
    to: undefined,
    message: undefined,
    role: "editors",
  });

  const handleChange = async (e) => {
    setinvitationData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/server/invitations/${props.projectId}`,
        invitationData
      );
      console.log(res);
      setIsPopupVisible(false);
      window.location.reload();
    } catch (err) {
      throw err;
    }
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const renderContent = () => {
    return (
      <form onSubmit={handleSubmit} className="modalContainer">
        <div className="modalItem">
          <label htmlFor="to">Username of the invitee: </label>
          <input
            required
            type="text"
            id="to"
            name="to"
            className="modalInput"
            onChange={handleChange}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="desc">Message to the invitee: </label>
          <textarea
            required
            type="text"
            id="message"
            name="message"
            className="modalInput"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="modalItem">
          <label htmlFor="role">Role of the invitee: </label>
          <select
            required
            id="role"
            name="role"
            onChange={handleChange}
            className="modalSelect"
          >
            <option value="editors">Editor</option>
            <option value="authors">Author</option>
          </select>
        </div>
        <input type="submit" value="Invite User" className="modalButton" />
      </form>
    );
  };

  return (
    <Popup
      id="popup"
      width={500}
      height="auto"
      showTitle={true}
      title="Write details about the invitation:"
      visible={isPopupVisible}
      onHiding={togglePopup}
      hideOnOutsideClick={true}
      contentRender={renderContent}
    ></Popup>
  );
};

export default ModalWindow;
