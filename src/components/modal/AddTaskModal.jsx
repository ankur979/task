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

const AddTaskModal = ({ isOpen, setIsOpen, tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "P0",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setNewTask({
      title: "",
      description: "",
      assignee: "",
      priority: "P0",
      status: "Pending",
    });
  };

  const onClose = (e) => {
    e.preventDefault();
    setIsOpen(false);
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTask);
    setTasks([...tasks, newTask]);
    onClose(e);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Add Task Modal"
    >
      <div className="add-modal">
        <div className="modal-top">
          <p>ADD TASK</p>
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
                Title:
              </label>
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleChange}
              />
            </div>
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
                Description:
              </label>
              <textarea
                name="description"
                value={newTask.description}
                onChange={handleChange}
              ></textarea>
            </div>
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
                Assignee:
              </label>
              <input
                type="text"
                name="assignee"
                value={newTask.assignee}
                onChange={handleChange}
              />
            </div>
            <div
              style={{
                flexDirection: "row",
              }}
            >
              <label
                style={{
                  width: "102px",
                }}
              >
                Priority:
              </label>
              <select
                name="priority"
                value={newTask.priority}
                onChange={handleChange}
                style={{
                  justifySelf: "flex-start",
                }}
              >
                {["P0", "P1", "P2"].map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
              </select>
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

export default AddTaskModal;
