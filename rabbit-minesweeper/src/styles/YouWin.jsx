import ThanksForPlaying from "../Thanks-for-playing";

export default function YouWin() {
  const [playAgain, setPlayAgain] = useState(null);
  const { playerOneName, playerOneLives, setPlayerOneLives } =
    useContext(playerOneContext);

  const handleYesClick = () => {
    setPlayAgain(true);
    setPlayerOneLives(3);
  };
  const handleNoClick = () => {
    setPlayAgain(false);
  };

  return playAgain == true ? (
    <Game></Game>
  ) : playAgain == false ? (
    <ThanksForPlaying></ThanksForPlaying>
  ) : (
    <div id="you-won-screen">
      <h1 className="game-over">You Won!</h1>
      <img src="src\assets\rabbitFound.jpg" alt="" className="you-won-pic" />
      <p>Lives = {playerOneLives}</p>
      <p> You found the bunny!</p>
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
