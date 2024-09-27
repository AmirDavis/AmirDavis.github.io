import PlayerCard from "./Player-Card";

export default function GameHeader() {
  return (
    <div className="game-header">
      <PlayerCard />
      <h1 className="game-header-h1">Can you find the bunny? </h1>
      <PlayerCard />
    </div>
  );
}
