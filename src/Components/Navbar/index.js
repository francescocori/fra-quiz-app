import React from "react";

import "./style.css";

const NavBar = ({ firstname, questionNumber, score }) => {
  return (
    <header className="header">
      <h2 className="header-title">
        Quiz <br />
        App
      </h2>
      <h3 className="header-message">
        Score <br />
        {` ${score}/10`}
      </h3>
      <h3 className="header-message">
        Question <br />
        {` ${questionNumber + 1}/10`}
      </h3>
      <h3 className="header-name">
        Hello <br /> {` ${firstname}`}
      </h3>
    </header>
  );
};

export default NavBar;
