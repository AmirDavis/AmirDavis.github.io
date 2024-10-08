import { useState, createContext } from "react";
import CharacterCreation from "./character-creation";
import Game from "./Game";

export const playerOneContext = createContext();

function App() {
  const [characterCreated, setCharacterCreated] = useState(false);
  const [playerOneName, setPlayerOneName] = useState("Player One");
  const [playerOneLives, setPlayerOneLives] = useState(3);

  const handleSetPlayerName = (name) => {
    setPlayerOneName(name);
    setCharacterCreated(true);
  };

  return (
    <>
      {characterCreated ? (
        <playerOneContext.Provider
          value={{ playerOneName, playerOneLives, setPlayerOneLives }}
        >
          <Game />
        </playerOneContext.Provider>
      ) : (
        <CharacterCreation
          playerOneName={playerOneName}
          setPlayerOneName={handleSetPlayerName}
        />
      )}
    </>
  );
}

export default App;
