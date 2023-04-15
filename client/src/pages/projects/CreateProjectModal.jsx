import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { useStyles } from "../../hooks/useStyles";
import "./createProjectModal.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const ModalWindow = (props) => {
  const classes = useStyles();
  const { isCreateProjectModalOpen, setIsCreateProjectModalOpen } = props;
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
      setIsCreateProjectModalOpen(false);
      console.log(res);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <Modal
        className={classes.root}
        ariaHideApp={false}
        isOpen={isCreateProjectModalOpen}
        onRequestClose={() => setIsCreateProjectModalOpen(false)}
      >
        <h2>Write details about the project:</h2>
        <div className={classes.inputs}>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Name of the project</h3>
              <input
                required
                type="text"
                placeholder="Name"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <h3>Description</h3>
              <input
                required
                type="text"
                placeholder="Description"
                id="desc"
                onChange={handleChange}
              />
            </div>
            <div>
              <h3>Type of the project</h3>
              <select required id="isPublic" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Type
                </option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <input type="submit" className={classes.buttons} />
          </form>
        </div>
        <div>
          <button onClick={() => setIsCreateProjectModalOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
