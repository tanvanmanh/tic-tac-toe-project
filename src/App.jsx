import { useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
function App() {
  const [gameTurns, setGameTunrs] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
    setGameTunrs(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [{
        square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns];
        console.log(updatedTurns.length);
      
      return updatedTurns;
    });

  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol={"X"} isActive={activePlayer === "X"}/>
        <Player name="Player 2" symbol={"O"} isActive={activePlayer === "O"}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} 
        turns={gameTurns}/>
    </div>
    <Log turns={gameTurns} />
  </main>
}

export default App
