import React from "react";
import "./style.css";
const FinalScore = ({ startGame, score }) => {
  return (
    <div>
      <div className="modal-overlay">
        <h4>
          Your score is <br />
          {` ${score}  /10`}
        </h4>
        {/* <h4>{` ${score}  /10`}</h4> */}
        <button className="start-button" onClick={startGame}>
          {" "}
          Play Again{" "}
        </button>
      </div>
    </div>
  );
};

export default FinalScore;
