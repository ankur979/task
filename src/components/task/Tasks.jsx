import React from "react";
import "./tasks.css";
import Cart from "./Cart";

const Tasks = ({ tasks, setTasks }) => {
  return (
    <div className="main-task-box">
      <div className="task-box">
        <h2 className="pending">Pending</h2>
        <div className="task-box-cart">
          <div className="cart-box">
            {tasks
              .filter((task) => task.status === "Pending")
              .map((task) => (
                <Cart
                  task={task}
                  key={task.id}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="task-box">
        <h2
          className="pending"
          style={{
            backgroundColor: "#a89d32",
          }}
        >
          In Progress
        </h2>
        <div className="task-box-cart">
          <div className="cart-box">
            {tasks
              .filter((task) => task.status === "In Progress")
              .map((task) => (
                <Cart
                  task={task}
                  key={task.id}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="task-box">
        <h2
          className="pending"
          style={{
            backgroundColor: "#32a836",
          }}
        >
          Completed
        </h2>
        <div className="task-box-cart">
          <div className="cart-box">
            {tasks
              .filter((task) => task.status === "Completed")
              .map((task) => (
                <Cart
                  task={task}
                  key={task.id}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="task-box">
        <h2
          className="pending"
          style={{
            backgroundColor: "#323ca8",
          }}
        >
          Deployed
        </h2>
        <div className="task-box-cart">
          <div className="cart-box">
            {tasks
              .filter((task) => task.status === "Deployed")
              .map((task) => (
                <Cart
                  task={task}
                  key={task.id}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="task-box">
        <h2
          className="pending"
          style={{
            backgroundColor: "#a83256",
          }}
        >
          Deferred
        </h2>
        <div className="task-box-cart">
          <div className="cart-box">
            {tasks
              .filter((task) => task.status === "Deferred")
              .map((task) => (
                <Cart
                  task={task}
                  key={task.id}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
