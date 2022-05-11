import React, { useEffect, useState } from "react";
import Categories from "../../Data/Categories";
import "./style.css";
import {
  Answers,
  Navbar,
  Footer,
  Questions,
  Finalscore,
  Startmodal,
} from "../../Components";

const Game = () => {
  const [game, setGame] = useState({
    startGameModal: true,
    allQuestions: [],
    currentQuestion: "",
    questionNumber: 0,
    correctAnswers: "",
    wrongAnswers: "",
    score: 0,
    mixedAnswer: [],
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

  const handleClickedAnswer = (e) => {
    setGame((prevGame) => {
      const { allQuestions, questionNumber, correctAnswers } = game;
      const increasedIndex = prevGame.questionNumber + 1;
      const nextGame = {
        ...prevGame,
        questionNumber: increasedIndex,
        currentQuestion: allQuestions[increasedIndex]?.question,
        correctAnswers: allQuestions[increasedIndex]?.correct_answer ?? [],
        wrongAnswers: allQuestions[increasedIndex]?.incorrect_answers ?? [],
      };
      if (questionNumber === allQuestions.length - 1) {
        nextGame.finalModal = true;
        nextGame.questionNumber = 0;
      } else if (e.target.value === correctAnswers) {
        nextGame.score += 1;
      }

      return nextGame;
    });
  };

  return (
    <div className="game-page">
      {game.startGameModal && (
        <Startmodal
          startGame={startGame}
          firstname={firstname}
          setCategory={setCategory}
          Categories={Categories}
          setFirstname={setFirstname}
          setLevel={setLevel}
        />
      )}
      <Navbar
        questionNumber={game.questionNumber}
        score={game.score}
        firstname={firstname}
      />
      <Questions currentQuestion={game.currentQuestion} />

      {!game.startGameModal && (
        <Answers
          handleClickedAnswer={handleClickedAnswer}
          correctAnswers={game.correctAnswers}
          wrongAnswers={game.wrongAnswers}
        />
      )}
      <Footer />
      {game.finalModal && (
        <Finalscore score={game.score} startGame={startGame} />
      )}
    </div>
  );
};

export default Game;
