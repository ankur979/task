import React from "react";
import "./navbar.css";
import icon from "../../images/icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="nav-text">Task Board</h2>
      <div>
        {" "}
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default Navbar;
