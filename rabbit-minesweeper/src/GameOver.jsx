import { playerOneContext } from "./App";
import Game from "./Game";
import ThanksForPlaying from "./Thanks-for-playing";
import { useState, useContext } from "react";

export default function GameOver({ setRabbitFound }) {
  const [playAgain, setPlayAgain] = useState(null);
  const { playerOneName, playerOneLives, setPlayerOneLives } =
    useContext(playerOneContext);

  const handleYesClick = () => {
    setPlayAgain(true);
    setPlayerOneLives(3);
    setRabbitFound(false);
  };
  const handleNoClick = () => {
    setPlayAgain(false);
  };

  return playAgain == true ? (
    <Game></Game>
  ) : playAgain == false ? (
    <ThanksForPlaying></ThanksForPlaying>
  ) : (
    <div className="game-over-screen">
      <h1 className="game-over-h1">Game Over</h1>
      <img src="src\assets\bomb.jpg" alt="" className="game-over-pic" />
      <p>Lives = {playerOneLives}</p>
      <p>Do you want to play again?</p>
      <button className="btn-yes" onClick={handleYesClick}>
        Yes
      </button>
      <button className="btn-no" onClick={handleNoClick}>
        No
      </button>
    </div>
  );
}
