import { useState, createContext, useContext } from "react";

export default function CharacterCreation({ playerOneName, setPlayerOneName }) {
  const [inputValue, setInputValue] = useState("");
  const [paragraphText, setParagraphText] = useState("");

  /*
    e is the the event object. WHen an event occurs (like typing or clicking a button), the event object containts
    information about that event. In this case, the event is triggered by typing in the input field

    e.target refers to the HTML element that triggered the event

    target gives you access to the specific DOM element that triggered the event, which allows you to interact w/ it 
    and extract useful information (like its current value)

    e.target.value is the current value of the input field
  */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Character Creation Page</h1>
      <label htmlFor="characterName"> Player One Name: </label>
      <input
        type="text"
        id="characterName"
        placeholder={playerOneName}
        value={inputValue}
        onChange={handleInputChange}
        maxLength={20}
      />
      <button
        onClick={() =>
          inputValue.length > 0
            ? setPlayerOneName(inputValue)
            : setParagraphText("Please enter a name of length 1 or greater")
        }
      >
        Submit Character Name
      </button>
      <p id="p1">{paragraphText}</p>
    </div>
  );
}
