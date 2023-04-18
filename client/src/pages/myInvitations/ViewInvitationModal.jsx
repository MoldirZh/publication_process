import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Popup } from "devextreme-react/popup";

const ModalWindow = (props) => {
  const { isPopupVisible, setIsPopupVisible, item } = props;
  const { user } = useContext(AuthContext);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const renderContent = () => {
    return (
      <div className="modalContainer">
        <div className="modalDesc">
          {item && (
            <>
              <div className="modalDescItem">
                <b>Project name: </b>
                {item.project.name}
              </div>
              <div className="modalDescItem">
                <b>Project description: </b>
                {item.project.desc}
              </div>
              <div className="modalDescItem">
                <b>From: </b>
                {item.from.username}{" "}
              </div>
              <div className="modalDescItem">
                <b>Project type: </b>
                {item.project.isPublic ? "public" : "private"}
              </div>
            </>
          )}
        </div>
        <div className="modalButtons">
          <button
            className="modalButton green"
            value="accept"
            onClick={handleClick}
          >
            Accept
          </button>
          <button
            className="modalButton red"
            value="reject"
            onClick={handleClick}
          >
            Reject
          </button>
        </div>
      </div>
    );
  };

  const handleClick = async (e) => {
    const status = e.target.value == "accept" ? "Accepted" : "Declined";
    try {
      const res = await axios.put(`/server/invitations/${item._id}`, {
        status: status,
      });
      if (status == "Accepted") {
        try {
          item.role == "editors"
            ? await axios.put(
                `/server/projects/${item.project._id}?isPush=true`,
                {
                  editors: user._id,
                }
              )
            : await axios.put(
                `/server/projects/${item.project._id}?isPush=true`,
                {
                  authors: user._id,
                }
              );
        } catch (err) {
          throw err;
        }
      }
      setIsPopupVisible(false);
      window.location.reload();
    } catch (err) {
      throw err;
    }
  };

  return (
    <Popup
      id="popup"
      width={500}
      height="auto"
      showTitle={true}
      title="Invitation details"
      visible={isPopupVisible}
      onHiding={togglePopup}
      hideOnOutsideClick={true}
      contentRender={renderContent}
    ></Popup>
  );
};

export default ModalWindow;
