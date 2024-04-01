import React, { useState } from "react";
import "./home.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tasks from "../../components/task/Tasks";
import dummyTasks from "../../dummyTasks";
import AddTaskModal from "../../components/modal/AddTaskModal";

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tasks, setTasks] = useState(dummyTasks);
  const [isOpen, setIsOpen] = useState(false);
  const [assigneeFilter, setAssigneeFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleAssigneeFilterChange = (e) => {
    setAssigneeFilter(e.target.value);
  };

  const handlePriorityFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    let isAssigneeMatch = true;
    let isPriorityMatch = true;
    let isDateMatch = true;

    if (assigneeFilter) {
      isAssigneeMatch = task.assignee.toLowerCase().includes(assigneeFilter.toLowerCase());
    }

    if (priorityFilter) {
      isPriorityMatch = task.priority === priorityFilter;
    }

    if (startDate && endDate) {
      isDateMatch = new Date(task.date) >= startDate && new Date(task.date) <= endDate;
    }

    return isAssigneeMatch && isPriorityMatch && isDateMatch;
  });

  return (
    <>
      <AddTaskModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        tasks={tasks}
        setTasks={setTasks}
      />
      <div className="home-page">
        <div className="first-box">
          <div className="filter">
            <div className="text">Filter By: </div>
            <div className="assignee">
              <input
                type="text"
                placeholder="Assignee name"
                value={assigneeFilter}
                onChange={handleAssigneeFilterChange}
              />
            </div>
            <div className="priority">
              <select
                className="classic"
                name="priority"
                value={priorityFilter}
                onChange={handlePriorityFilterChange}
              >
                <option value="">Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
            </div>
            <div className="date">
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
              />
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
              />
            </div>
          </div>
          <div className="add-task">
            <button className="button" onClick={() => setIsOpen(true)}>
              Add New Task
            </button>
          </div>
        </div>
        <div className="third-box">
          <Tasks tasks={filteredTasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
};

export default Home;
