import { useState, useContext } from "react";
import Board from "./Board";
import PlayerCard from "./Player-Card";
import GameOver from "./GameOver";
import { playerOneContext } from "./App";

/* 
 1. Create a context and set it equal to createContext(). Can name it whatever you like, but best practice is for the variable to have the word Context in it.
 2. Make sure to export it. You will import this context in other components so you can access the variables/functions 
*/
//Can pass in more than one value/variable/function to the hook value like so
// Create a provider component to wrap the parent component

export default function Game() {
  //const [playerOneLives, setPlayerOneLives] = useState(3);
  //const playerOneName = useContext(playerOneContext);
  const { playerOneName, playerOneLives, setPlayerOneLives } =
    useContext(playerOneContext);

  return (
    <div>
      {playerOneLives === 0 ? (
        <GameOver />
      ) : (
        <>
          <div className="game-header">
            <PlayerCard />
            <h1 className="game-header-h1">Can you find the bunny? </h1>
            <PlayerCard />
          </div>
          <Board />
        </>
      )}
    </div>
  );
}
