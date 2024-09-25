import BoardSpace from "./Board-Space";
import { useState } from "react";

export default function Board() {
  const board = Array.from({ length: 100 });
  const holes = createArray();
  const [boardText, setBoardText] = useState(
    "Click on a square to see what's under"
  );

  return (
    <div id="board">
      {
        <p id="board-text">{boardText}</p>
        /* Use map to render the board space x-times 
      key is a reserved keyword in JS/React that is used as a unique identifier for components*/
      }
      {board.map((_, index) =>
        (index + 1) % 10 == 0 ? (
          <>
            <BoardSpace
              key={index}
              index={index + 1}
              holesArray={holes}
              setBoardText={setBoardText}
            />{" "}
            <br />
          </>
        ) : (
          <BoardSpace
            key={index}
            index={index + 1}
            holesArray={holes}
            setBoardText={setBoardText}
          />
        )
      )}
      {console.log(holes)}
    </div>
  );
}

function createArray() {
  let location = null;
  const amountOfBombs = 33;
  const amountOfCarrots = 5;
  let rabbitHoles = Array(100).fill(null);

  //Creates the bomb locations
  for (let i = 0; i < amountOfBombs; i++) {
    while (true) {
      location = Math.floor(Math.random() * 101);
      if (rabbitHoles[location] == null) {
        rabbitHoles[location] = "B";
        break;
      }
    }
  }

  //Creates the rabbit Hole where the rabbit is hiding
  while (true) {
    location = Math.floor(Math.random() * 101);
    if (rabbitHoles[location] == null) {
      rabbitHoles[location] = "R";
      break;
    }
  }

  //Creates the carrot locations
  for (let i = 0; i < amountOfCarrots; i++) {
    while (true) {
      location = Math.floor(Math.random() * 101);
      if (rabbitHoles[location] == null) {
        rabbitHoles[location] = "C";
        break;
      }
    }
  }

  return rabbitHoles;
}
