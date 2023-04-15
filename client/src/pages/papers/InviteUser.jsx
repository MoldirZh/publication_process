import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { useStyles } from "../../hooks/useStyles";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const ModalWindow = (props) => {
  const classes = useStyles();
  const { modalIsOpen, setModalIsOpen } = props;
  const { user } = useContext(AuthContext);

  const [invitationData, setinvitationData] = useState({
    from: user?._id,
    to: undefined,
    message: undefined,
    role: undefined,
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
      setModalIsOpen(false);
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
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Invitation details</h2>
        <div className={classes.inputs}>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Name of the invitee</h3>
              <input
                required
                type="text"
                placeholder="Username of the invitee"
                id="to"
                onChange={handleChange}
              />
            </div>
            <div>
              <h3>Message</h3>
              <input
                required
                type="text"
                placeholder="Message to the invitee"
                id="message"
                onChange={handleChange}
              />
            </div>
            <div>
              <h3>Role of the invitee</h3>
              <select required id="role" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Role
                </option>
                <option value="editors">Editor</option>
                <option value="authors">Author</option>
              </select>
            </div>
            <input type="submit" className={classes.buttons} />
          </form>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
