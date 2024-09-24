import { useContext } from "react";
import { playerOneContext } from "./App";

export default function PlayerCard() {
  const { playerOneName, playerOneLives, setPlayerOneLives } =
    useContext(playerOneContext);

  return (
    <>
      <div className="player-card">
        <img src="src\assets\man-with-net.jpg" alt="" className="player-pic" />
        <p className="player-name">Player 1: {playerOneName}</p>
        <p className="player-lives">Lives: {playerOneLives}</p>
      </div>
    </>
  );
}
