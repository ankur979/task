import React, { useState } from "react";
import Modal from "react-modal";
import "./editTaskModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    width: "350px",
  },
};

const DeleteTaskModal = ({
  isOpenDeleteModal,
  setIsOpenDeleteModal,
  task,
  tasks,
  setTasks,
}) => {
  const onClose = (e) => {
    e.preventDefault();
    setIsOpenDeleteModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.status === "Completed") {
      alert("Task cannot be deleted because it is marked as completed.");
      return;
    }

    setTasks(tasks.filter((t) => t.id !== task.id));
    onClose(e);
  };

  return (
    <Modal
      isOpen={isOpenDeleteModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Delete Task Modal"
    >
      <div className="add-modal">
        <div className="modal-top">
          <p>DELRTE TASK</p>
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={() => setIsOpenDeleteModal(false)}
          >
            X
          </p>
        </div>

        <div className="middle">
          <form onSubmit={handleSubmit}>
            <div
              style={{
                flexDirection: "row",
              }}
            >
              <label
                style={{
                  flex: "150px",
                }}
              >
                Do You Wish to Delete Task.
              </label>
            </div>
            <div
              className="buttom-modal"
              style={{
                flexDirection: "row-reverse",
              }}
            >
              <button
                className="button"
                onClick={() => setIsOpenDeleteModal(false)}
              >
                No
              </button>
              <button className="button" onClick={handleSubmit} type="submit">
                Yes
              </button>
              <p>{task.title}</p>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteTaskModal;
