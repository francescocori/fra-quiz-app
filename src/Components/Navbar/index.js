import React from "react";
import "./style.css";

const NavBar = ({ firstname, questionNumber, score }) => {
  return (
    <nav className="navbar">
      <h2 className="nav-title">
        Quiz <br />
        App
      </h2>
      <h3 className="nav-message">
        Score <br />
        {` ${score}/10`}
      </h3>
      <h3 className="nav-message">
        Question <br />
        {` ${questionNumber + 1}/10`}
      </h3>
      <h3 className="nav-name">
        Hello <br /> {` ${firstname}`}
      </h3>
    </nav>
  );
};

export default NavBar;
