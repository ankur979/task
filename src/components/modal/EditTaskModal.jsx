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

const EditTaskModal = ({
  isOpenEditModal,
  setIsOpenEditModal,
  task,
  tasks,
  setTasks,
}) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setEditedTask(task);
  };

  const onClose = (e) => {
    e.preventDefault();
    setIsOpenEditModal(!isOpenEditModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(
      tasks.map((taskItem) => {
        if (taskItem.id === editedTask.id) {
          return editedTask;
        }
        return taskItem;
      })
    );
    onClose(e);
  };

  return (
    <Modal
      isOpen={isOpenEditModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Edit Task Modal"
    >
      <div className="edit-modal">
        <div className="modal-top">
          <p>EDIT TASK</p>
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            X
          </p>
        </div>

        <div className="middle">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={editedTask.assignee}
                disabled={true}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={editedTask.description}
                disabled={true}
              ></textarea>
            </div>
            <div>
              <label>Assignee:</label>
              <input
                type="text"
                name="title"
                value={editedTask.title}
                disabled={true}
              />
            </div>
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className="priority">
                <label> Priority: </label>
                <select
                  className="classic"
                  name="priority"
                  onChange={handleChange}
                  id="prioritySelect"
                >
                  {["P0", "P1", "P2"].map((value, index) => (
                    <option
                      value={value}
                      key={index}
                      selected={value === editedTask.priority}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="priority">
                <label> Status: </label>
                <select
                  className="classic"
                  name="status"
                  onChange={handleChange}
                  value={editedTask.status}
                >
                  {[
                    "Pending",
                    "In Progress",
                    "Completed",
                    "Deployed",
                    "Deferred",
                  ].map((value, index) => (
                    <option
                      value={value}
                      key={index}
                      selected={value === editedTask.status}
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="buttom-modal">
          <button className="button" onClick={resetForm}>
            Reset
          </button>
          <button className="button" onClick={handleSubmit} type="submit">
            Sumbit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
