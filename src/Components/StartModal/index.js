// import React from "react";
// import "./style.css";
// import Data from "../../Data/Categories";

// const StartModal = ({
//   startGame,
//   firstname,
//   category,
//   level,
//   setFirstname,
//   setCategory,
//   Categories,
// }) => {
//   return (
//     <div className="modal-overlay">
//       <h4 className="header-startModal">Test your knowledge</h4>
//       <form className="form">
//         <div className="input-div">
//           <label htmlFor="name">Name: </label>
//           <input
//             className="input-fild"
//             type="text"
//             name="name"
//             onChange={(e) => setFirstname(e.target.value)}
//             value={firstname}
//             //POI C'è STO CAVOLO DI NAME CHE NN SE NE VA UNO VOLTA CHE IL FORM è STATO SUBMIT
//           />
//         </div>
//         <div className="input-div">
//           <label htmlFor="category">Category: </label>
//           <select
//             className="input-fild"
//             name="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option></option>
//             {Categories.map((category) => (
//               <option>{category.category}</option>
//             ))}
//           </select>
//         </div>
//         <div className="input-div">
//           <label htmlFor="level">Level: </label>
//           <select
//             className="input-fild"
//             name="level"
//             value={level}
//             // onChange={(e) => setLevel(e.target.value)}
//           >
//             <option></option>
//             <option value="easy">Easy</option>
//             <option value="medium">Medium</option>
//             <option value="hard">Hard</option>
//           </select>
//         </div>
//       </form>

//       <button className="start-button" type="submit" onClick={startGame}>
//         Start{" "}
//       </button>
//     </div>
//   );
// };

// export default StartModal;

import React from "react";
import "./style.css";
import Data from "../../Data/Categories";

const StartModal = ({
  startGame,
  firstname,
  category,
  level,
  setFirstname,
  setCategory,
  Categories,
  setLevel,
}) => {
  return (
    <div className="modal-overlay">
      <h4 className="header-startModal">Test your knowledge</h4>
      <form className="form">
        <div className="input-div">
          <label htmlFor="name">Name: </label>
          <input
            className="input-fild"
            type="text"
            name="name"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            //POI C'è STO CAVOLO DI NAME CHE NN SE NE VA UNO VOLTA CHE IL FORM è STATO SUBMIT
          />
        </div>
        <div className="input-div">
          <label htmlFor="category">Category: </label>
          <select
            className="input-fild"
            name="category"
            onChange={(e) => {
              console.log(e.target.value);
              return setCategory(e.target.value);
            }}
          >
            <option></option>
            {Categories.map((category) => (
              <option value={category.value}>{category.category}</option>
            ))}
          </select>
        </div>
        <div className="input-div">
          <label htmlFor="level">Level: </label>
          <select
            className="input-fild"
            name="level"
            onChange={(e) => {
              console.log(e.target.value);
              return setLevel(e.target.value);
            }}
          >
            <option></option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </form>

      <button className="start-button" type="submit" onClick={startGame}>
        Start{" "}
      </button>
    </div>
  );
};

export default StartModal;
