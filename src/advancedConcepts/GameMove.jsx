import React, { useState } from "react";

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

// adjacent + diagonal moves
const validMoves = {
  0: [1, 3, 4],
  1: [0, 2, 3, 4, 5],
  2: [1, 4, 5],

  3: [0, 1, 4, 6, 7],
  4: [0, 1, 2, 3, 5, 6, 7, 8],
  5: [1, 2, 4, 7, 8],

  6: [3, 4, 7],
  7: [3, 4, 5, 6, 8],
  8: [4, 5, 7],
};

const GameMove = () => {
  const [board, setBoard] = useState(Array(9).fill(""));

  const [xTurn, setXTurn] = useState(true);

  const [selectedCell, setSelectedCell] = useState(null);

  const [placedCount, setPlacedCount] = useState(0);

  const checkWinner = (data) => {
    for (let [a, b, c] of winPatterns) {
      if (
        data[a] &&
        data[a] === data[b] &&
        data[a] === data[c]
      ) {
        return data[a];
      }
    }

    return null;
  };

  const winner = checkWinner(board);

  // ---------------------------
  // PHASE 1 -> PLACE PIECES
  // ---------------------------
  const placePiece = (index) => {
    if (board[index] || winner) return;

    const copy = [...board];

    copy[index] = xTurn ? "X" : "O";

    setBoard(copy);

    setPlacedCount((prev) => prev + 1);

    setXTurn(!xTurn);
  };

  // ---------------------------
  // PHASE 2 -> SELECT PIECE
  // ---------------------------
  const selectPiece = (index) => {
    if (winner) return;

    const currentPlayer = xTurn ? "X" : "O";

    if (board[index] !== currentPlayer) return;

    setSelectedCell(index);
  };

  // ---------------------------
  // MOVE PIECE
  // ---------------------------
  const movePiece = (toIndex) => {
    if (winner) return;

    if (selectedCell === null) return;

    // must be empty
    if (board[toIndex] !== "") return;

    // only adjacent/diagonal move
    if (!validMoves[selectedCell].includes(toIndex)) return;

    const copy = [...board];

    copy[toIndex] = copy[selectedCell];

    copy[selectedCell] = "";

    setBoard(copy);

    setSelectedCell(null);

    setXTurn(!xTurn);
  };

  const isPlacementPhase = placedCount < 6;

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      <h1>Moving Tic Tac Toe</h1>

      <h2>
        Turn : {xTurn ? "X" : "O"}
      </h2>

      <h3>
        Phase :{" "}
        {isPlacementPhase
          ? "Place 3 Pieces Each"
          : "Move Pieces"}
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 110px)",
          gap: "12px",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        {board.map((cell, index) => {
          const isSelected = selectedCell === index;

          const isPossibleMove =
            !isPlacementPhase &&
            selectedCell !== null &&
            board[index] === "" &&
            validMoves[selectedCell]?.includes(index);

          return (
            <button
              key={index}
              onClick={() => {
                // PHASE 1
                if (isPlacementPhase) {
                  placePiece(index);
                  return;
                }

                // PHASE 2
                if (cell) {
                  selectPiece(index);
                } else {
                  movePiece(index);
                }
              }}
              style={{
                width: "110px",
                height: "110px",
                fontSize: "38px",
                fontWeight: "bold",
                borderRadius: "14px",

                border: isSelected
                  ? "4px solid dodgerblue"
                  : "2px solid #444",

                background: isPossibleMove
                  ? "#caffbf"
                  : "#f1f1f1",

                cursor: "pointer",

                transition: "0.2s",

                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              {cell}
            </button>
          );
        })}
      </div>

      <h1
        style={{
          marginTop: "30px",
        }}
      >
        Winner : {winner || "None"}
      </h1>

      <div
        style={{
          marginTop: "25px",
          lineHeight: "30px",
          fontSize: "18px",
        }}
      >
        <div>
          🟦 Blue Border → Selected Piece
        </div>

        <div>
          🟩 Green Cell → Allowed Move
        </div>

        <div>
          🔄 Only adjacent / side / diagonal moves allowed
        </div>
      </div>
    </div>
  );
};

export default GameMove;