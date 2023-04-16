import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Popup } from "devextreme-react/popup";

const ModalWindow = (props) => {
  const { isPopupVisible, setIsPopupVisible } = props;
  const { user } = useContext(AuthContext);

  const [newProjectData, setNewProjectData] = useState({
    name: undefined,
    desc: undefined,
    isPublic: undefined,
    editors: [user?._id] || undefined,
  });

  const handleChange = (e) => {
    e.target.type === "select-one"
      ? setNewProjectData((prev) => ({
          ...prev,
          isPublic: e.target.value === "public",
        }))
      : setNewProjectData((prev) => ({
          ...prev,
          [e.target.id]: e.target.value,
        }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/server/projects?userid=${user._id}`,
        newProjectData
      );
      setIsPopupVisible(false);
      console.log(res);
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
          <label htmlFor="name">Name of the project: </label>
          <input
            required
            type="text"
            id="name"
            className="modalInput"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="modalItem">
          <label htmlFor="desc">Description of the project: </label>
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
          <label htmlFor="type">Type of the project: </label>
          <select
            required
            id="isPublic"
            name="type"
            onChange={handleChange}
            className="modalSelect"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <input type="submit" value="Create Project" className="modalButton" />
      </form>
    );
  };

  return (
    <Popup
      id="popup"
      width={500}
      height="auto"
      showTitle={true}
      title="Write details about the project:"
      visible={isPopupVisible}
      onHiding={togglePopup}
      hideOnOutsideClick={true}
      contentRender={renderContent}
    ></Popup>
  );
};

export default ModalWindow;
