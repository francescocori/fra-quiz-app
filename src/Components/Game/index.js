import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Questions from "../Questions";
import Answers from "../Answers";
import FinalScore from "../FinalScore";
import StartModal from "../StartModal";
import Categories from "../../Data/Categories";
const Game = () => {
  const [game, setGame] = useState({
    startGameModal: true,
    allQuestions: [],
    currentQuestion: "",
    questionNumber: "0",
    correctAnswers: "",
    wrongAnswers: "",
    score: "0",
    mixedAnswer: [],
    selectedAnswer: 0,
    finalModal: false,
  });
  const [firstname, setFirstname] = useState("");
  const [category, setCategory] = useState(0);
  const [level, setLevel] = useState("");

  async function getQuestions() {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=multiple`
    );

    const data = await res.json();
    console.log(data.results);
    setGame((prevGame) => {
      return {
        ...prevGame,
        allQuestions: data.results,
      };
    });
  }
  useEffect(() => {
    getQuestions();
  }, [category, level]);

  //show Question + answers......
  const startGame = (e) => {
    const { allQuestions, questionNumber, finalModal } = game;

    setGame((prevGame) => {
      if (finalModal) {
        return {
          ...prevGame,
          startGameModal: true,
          finalModal: false,
          questionNumber: 0,
          score: 0,
        };
      }

      return {
        ...prevGame,
        startGameModal: false,
        currentQuestion: allQuestions[questionNumber].question,
        correctAnswers: allQuestions[questionNumber].correct_answer,
        wrongAnswers: allQuestions[questionNumber].incorrect_answers,
      };
    });
  };

  //handle click on cell and check if winner
  const handleClick = (e) => {
    setGame((prevGame) => {
      const { allQuestions, questionNumber, correctAnswers } = game;
      //show final modal
      if (questionNumber === allQuestions.length) {
        return { ...prevGame, finalModal: true, questionNumber: 0 };
        // add 1 to score
      } else if (e.target.value === correctAnswers) {
        const indexIncrease = prevGame.questionNumber++;
        return {
          ...prevGame,
          score: prevGame.score++,
          questionNumber: indexIncrease,
          currentQuestion: allQuestions[indexIncrease].question,
          correctAnswers: allQuestions[indexIncrease].correct_answer,
          wrongAnswers: allQuestions[indexIncrease].incorrect_answers,
        };
      } else {
        const indexIncrease = prevGame.questionNumber++;
        return {
          ...prevGame,
          questionNumber: indexIncrease,
          currentQuestion: allQuestions[indexIncrease].question,
          correctAnswers: allQuestions[indexIncrease].correct_answer,
          wrongAnswers: allQuestions[indexIncrease].incorrect_answers,
        };
      }
    });
  };

  return (
    <div>
      {game.startGameModal && (
        <StartModal
          startGame={startGame}
          firstname={firstname}
          category={category}
          setCategory={setCategory}
          Categories={Categories}
          setFirstname={setFirstname}
          level={level}
          setLevel={setLevel}
        />
      )}
      <Navbar
        questionNumber={game.questionNumber}
        score={game.score}
        firstname={firstname}
      />
      <Questions currentQuestion={game.currentQuestion} />
      {/* <Questions
        currentQuestion={game.allQuestions[game.indexIncrease].question} */}

      {!game.startGameModal && (
        <Answers
          handleClick={handleClick}
          isCorrect={game.isCorrect}
          correctAnswers={game.correctAnswers}
          wrongAnswers={game.wrongAnswers}
        />
      )}
      <Footer />
      {game.finalModal && (
        <FinalScore score={game.score} startGame={startGame} />
      )}
    </div>
  );
};

export default Game;
