import React, { useState } from "react";

const ROWS = 6;
const COLS = 7;

const ConnectFourGame = () => {
  const [grid, setGrid] = useState(
    Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(""))
  );

  const [player, setPlayer] = useState("red");
  const [winner, setWinner] = useState(null);

  // winner check
  const checkWinner = (board, currentPlayer) => {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        // horizontal
        if (
          col + 3 < COLS &&
          board[row][col] === currentPlayer &&
          board[row][col + 1] === currentPlayer &&
          board[row][col + 2] === currentPlayer &&
          board[row][col + 3] === currentPlayer
        ) {
          return true;
        }

        // vertical
        if (
          row + 3 < ROWS &&
          board[row][col] === currentPlayer &&
          board[row + 1][col] === currentPlayer &&
          board[row + 2][col] === currentPlayer &&
          board[row + 3][col] === currentPlayer
        ) {
          return true;
        }

        // diagonal right
        if (
          row + 3 < ROWS &&
          col + 3 < COLS &&
          board[row][col] === currentPlayer &&
          board[row + 1][col + 1] === currentPlayer &&
          board[row + 2][col + 2] === currentPlayer &&
          board[row + 3][col + 3] === currentPlayer
        ) {
          return true;
        }

        // diagonal left
        if (
          row + 3 < ROWS &&
          col - 3 >= 0 &&
          board[row][col] === currentPlayer &&
          board[row + 1][col - 1] === currentPlayer &&
          board[row + 2][col - 2] === currentPlayer &&
          board[row + 3][col - 3] === currentPlayer
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const drop = (column) => {
    if (winner) return;

    const copy = grid.map((row) => [...row]);

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!copy[row][column]) {
        copy[row][column] = player;

        // winner check
        if (checkWinner(copy, player)) {
          setWinner(player);
        }

        setGrid(copy);
        setPlayer(player === "red" ? "blue" : "red");

        return;
      }
    }
  };

  const resetGame = () => {
    setGrid(
      Array(ROWS)
        .fill()
        .map(() => Array(COLS).fill(""))
    );

    setPlayer("red");
    setWinner(null);
  };

  return (
    <div
      style={{minHeight: "100vh", background: "#f4f7fb",display: "flex",flexDirection: "column",
        alignItems: "center",paddingTop: "30px",fontFamily: "Arial",}}>
      <h1>Connect Four</h1>

      <div style={{display: "grid", gridTemplateColumns: `repeat(${COLS}, 70px)`, gap: "10px", 
        background: "#1d4ed8", padding: "16px", borderRadius: "18px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)",}}>
        
        {[...Array(COLS)].map((_, index) => (
          <button key={index} onClick={() => drop(index)} disabled={winner}
            style={{width: "70px",height: "45px",border: "none",borderRadius: "10px",background: "#111827", color: "white",
              fontSize: "24px", cursor: "pointer",}}
          >
            ↓
          </button>
        ))}

        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`}
              style={{width: "70px",height: "70px",borderRadius: "50%",
                background: cell === "red"? "#ef4444": cell === "blue"? "#2563eb": "white",
                border: cell ? "none" : "3px solid #d1d5db",
              }}
            />
          ))
        )}
      </div>

      {/* status */}
      <div style={{marginTop: "20px", fontSize: "22px", fontWeight: "bold",display: "flex", alignItems: "center",gap: "10px",}}>
        {winner ? (
          <>
            Winner:
            <div style={{width: "24px",height: "24px",borderRadius: "50%",background: winner,}}/>
          </>
        ) : (
          <>
            Current Player:
            <div style={{width: "24px",height: "24px",borderRadius: "50%",background: player,}}/>
          </>
        )}
      </div>

      <button onClick={resetGame}
        style={{marginTop: "20px", padding: "10px 20px",border: "none",borderRadius: "10px", background: "#111827", 
            color: "white", fontSize: "16px",cursor: "pointer",}}>
        Reset Game
      </button>
    </div>
  );
};

export default ConnectFourGame;