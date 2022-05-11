import React from "react";
import "./style.css";

const Answers = ({ handleClickedAnswer, correctAnswers, wrongAnswers }) => {
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
            onClick={(e) => handleClickedAnswer(e)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        );
      })}
    </div>
  );
};

export default Answers;
