import React from "react";
import "./style.css";
const Questions = ({ currentQuestion }) => {
  return (
    <div>
      {/* code below is not best pratcice but for now seems the only way to remove unwanted caracter */}
      <h2 dangerouslySetInnerHTML={{ __html: currentQuestion }} />
    </div>
  );
};

export default Questions;
