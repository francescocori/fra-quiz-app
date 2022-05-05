import React from "react";
import "./style.css";
const Questions = ({ currentQuestion }) => {
  return (
    <div>
      <h2 className="question">{currentQuestion}</h2>
    </div>
  );
};

export default Questions;
