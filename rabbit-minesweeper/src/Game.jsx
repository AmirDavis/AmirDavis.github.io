import { useState, useContext, createContext } from "react";
import Board from "./Board";
import GameHeader from "./Game-Header";
import GameOver from "./GameOver";
import { playerOneContext } from "./App";
import YouWin from "./YouWin";

/* 
 1. Create a context and set it equal to createContext(). Can name it whatever you like, but best practice is for the variable to have the word Context in it.
 2. Make sure to export it. You will import this context in other components so you can access the variables/functions 
*/
//Can pass in more than one value/variable/function to the hook value like so
// Create a provider component to wrap the parent component

export const rabbitFoundContext = createContext();

export default function Game() {
  //const [playerOneLives, setPlayerOneLives] = useState(3);
  //const playerOneName = useContext(playerOneContext);
  const { playerOneName, playerOneLives, setPlayerOneLives } =
    useContext(playerOneContext);

  const [rabbitFound, setRabbitFound] = useState(false);

  return (
    <div id="screen">
      {playerOneLives === 0 ? (
        <GameOver setRabbitFound={setRabbitFound} />
      ) : rabbitFound == true ? (
        <YouWin setRabbitFound={setRabbitFound} />
      ) : (
        <>
          <GameHeader />
          <rabbitFoundContext.Provider value={{ rabbitFound, setRabbitFound }}>
            <Board />
          </rabbitFoundContext.Provider>
        </>
      )}
    </div>
  );
}
