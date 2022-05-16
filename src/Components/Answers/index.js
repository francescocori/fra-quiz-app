import React from "react";
import "./style.css";
import { nanoid } from "nanoid";
const Answers = ({ handleClickedAnswer, correctAnswers, wrongAnswers }) => {
  let mixedAnswer = [...wrongAnswers, correctAnswers];
  mixedAnswer.sort((a, b) => 0.5 - Math.random());
  return (
    <div className="answer-container">
      {mixedAnswer.map((answer) => {
        return (
          <button
            className="answer-cell"
            value={answer}
            key={nanoid()}
            onClick={(e) => handleClickedAnswer(e)}
            //code below is not best pratcice but for now seems the only way to remove unwanted caracter
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        );
      })}
    </div>
  );
};

export default Answers;
