import { useState } from "react";
import { useContext } from "react";
import { playerOneContext } from "./App";
import GameOver from "./GameOver";

export default function BoardSpace({ key, index, holesArray, setBoardText }) {
  let image = "src/assets/rabbit-hole.jpg";
  const [buttonImage, setButtonImage] = useState("src/assets/rabbit-hole.jpg");
  const { playerOneName, playerOneLives, setPlayerOneLives } =
    useContext(playerOneContext);

  const handleButtonClick = () => {
    const hole = holesArray[index - 1];
    console.log(hole);

    if (hole === "B") {
      setButtonImage("src/assets/bomb.jpg");
      setBoardText("BOOM! You found a bomb!");
      setPlayerOneLives(playerOneLives - 1);
    } else if (hole === "C") {
      setButtonImage("src/assets/carrot.jpg");
      setBoardText("You found a carrot!");
      setPlayerOneLives(playerOneLives + 1);
    } else if (hole === "R") {
      setButtonImage("src/assets/rabbitFound.jpg");
      setBoardText("You found the rabbit!");
    } else {
      setButtonImage("src/assets/emptyRabbitHole.jpg");
      setBoardText("You found nothing...");
    }
  };

  return (
    <div id="board-space">
      {/* Conditionally render the GameOver component if playerOneLives reaches 0 */}
      {playerOneLives === 0 ? (
        <GameOver />
      ) : (
        <button id="board-space-button" onClick={handleButtonClick}>
          <img src={buttonImage} alt="" id="board-space-pic" />
          <p id="board-space-text">{index}</p>
        </button>
      )}
    </div>
  );
}
