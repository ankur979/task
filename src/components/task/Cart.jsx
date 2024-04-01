import React from "react";
import "./tasks.css";
import dots from "../../images/dots.png";
import { useState } from "react";
import EditTaskModal from "../modal/EditTaskModal";
import DeleteTaskModal from "../modal/DeleteTaskModal";

const Cart = ({ task, setTasks, tasks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClick = (task) => {
    if (task.status === "Completed") {
      alert("Task cannot be deleted because it is marked as completed.");
      return;
    }

    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <>
      <div className="cart">
        <div className="box-1">
          <div className="title">{task.title}</div>
          <div className="po">{task.priority}</div>
        </div>
        <div className="box-2"></div>
        <div className="box-3">{task.description}</div>
        <div className="box-4">
          <div className="title">{task.assignee}</div>
          <div className="popup-menu">
            <button className="dots-icon" onClick={toggleMenu}>
              <img src={dots} className="dots" alt="" />
            </button>
            {isOpen && (
              <div className="menu-items">
                <div
                  className="div-button"
                  onClick={() => setIsOpenEditModal(true)}
                >
                  Edit
                </div>
                <EditTaskModal
                  isOpenEditModal={isOpenEditModal}
                  setIsOpenEditModal={setIsOpenEditModal}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                />
                <div className="box-2"></div>
                <div
                  className="div-button"
                  onClick={() => setIsOpenDeleteModal(true)}
                >
                  Delete
                </div>
                <DeleteTaskModal
                  isOpenDeleteModal={isOpenDeleteModal}
                  setIsOpenDeleteModal={setIsOpenDeleteModal}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              </div>
            )}
          </div>
        </div>
        <div className="box-5">
          <div className="po">{task.status}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
