import React from "react";
import "./style.css";
const Answers = ({ handleClick, correctAnswers, wrongAnswers }) => {
  let mixedAnswer = [...wrongAnswers, correctAnswers];
  mixedAnswer.sort((a, b) => 0.5 - Math.random());
  return (
    <div className="answer-container">
      {mixedAnswer.map((answer, index) => {
        return (
          <button
            className="answer-cell"
            value={answer}
            key={index}
            id={index}
            onClick={(e) => handleClick(e)}
            dangerouslySetInnerHTML={{ __html: answer }}
          ></button>
        );
      })}
    </div>
  );
};

export default Answers;
