import React, { useState } from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6],             // Diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsTurn, setXIsTurn] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  // Derive status during render instead of separate state/useEffect
  const winnerInfo = calculateWinner(squares);
  const isDraw = !winnerInfo && squares.every((square) => square !== null);

  function startGame(player) {
    setXIsTurn(player === "X");
    setGameStarted(true);
  }

  function handleClick(index) {
    // If square is filled or game is won, do nothing
    if (squares[index] || winnerInfo) return;

    const updatedSquares = [...squares];
    updatedSquares[index] = xIsTurn ? "X" : "O";

    setSquares(updatedSquares);
    setXIsTurn(!xIsTurn);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setGameStarted(false);
    setXIsTurn(true);
  }

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Tic Tac Toe</h2>
        <p>Pick who starts first:</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-black rounded" onClick={() => startGame("X")}>Play as X</button>
          <button className="px-4 py-2 bg-red-500 text-black rounded" onClick={() => startGame("O")}>Play as O</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
      
      <div className="h-8 mb-2">
        {winnerInfo ? (
          <h2 className="text-xl font-bold text-green-600">Winner: {winnerInfo.winner}!</h2>
        ) : isDraw ? (
          <h2 className="text-xl font-bold text-orange-500">Game Draw</h2>
        ) : (
          <h2 className="text-xl">Current Player: <span className="font-bold">{xIsTurn ? "X" : "O"}</span></h2>
        )}
      </div>

      
      <div 
        className="grid grid-cols-3 gap-2 bg-gray-200 p-2 rounded-lg" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '300px' }}
      >
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
            // Pass the winning line to highlight it
            isWinning={winnerInfo?.line.includes(index)} 
          />
        ))}
      </div>

      <button 
        className="mt-6 px-6 py-2 bg-gray-800 text-black rounded hover:bg-yellow-300 transition"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
}

export default Board;