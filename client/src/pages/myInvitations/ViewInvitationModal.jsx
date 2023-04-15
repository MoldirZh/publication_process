import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { useStyles } from "../../hooks/useStyles";
import "./viewInvitationModal.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const ModalWindow = (props) => {
  const classes = useStyles();
  const { isModalOpen, setIsModalOpen, item } = props;
  const { user } = useContext(AuthContext);

  console.log("modal item", item);

  const handleClick = async (e) => {
    const status = e.target.value == "accept" ? "Accepted" : "Rejected";
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
      setIsModalOpen(false);
      window.location.reload();
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <Modal
        className={classes.root}
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <h2>Invitation details</h2>
        <div className={classes.inputs}>
          {item && (
            <>
              <div>Project name: {item.project.name}</div>
              <div>Project description: {item.project.desc}</div>
              <div>From: {item.from.username} </div>
              <div>
                Project type: {item.project.isPublic ? "public" : "private"}
              </div>
            </>
          )}
        </div>
        <div>
          <button value="accept" onClick={handleClick}>
            Accept
          </button>
          <button value="reject" onClick={handleClick}>
            Reject
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWindow;
