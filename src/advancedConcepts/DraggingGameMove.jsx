import React, { useRef, useState } from "react";

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

const DraggingGameMove = () => {
  const [board, setBoard] = useState(Array(9).fill(""));

  const [xTurn, setXTurn] = useState(true);

  const [placedCount, setPlacedCount] = useState(0);

  const [draggingIndex, setDraggingIndex] =
    useState(null);

  const dragRef = useRef(null);

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

  const isPlacementPhase = placedCount < 6;

  // -----------------------
  // PLACE PIECES
  // -----------------------
  const placePiece = (index) => {
    if (board[index] || winner) return;

    const copy = [...board];

    copy[index] = xTurn ? "X" : "O";

    setBoard(copy);

    setPlacedCount((prev) => prev + 1);

    setXTurn(!xTurn);
  };

  // -----------------------
  // MOVE PIECES
  // -----------------------
  const handleDrop = (dropIndex) => {
    if (winner) return;

    const dragIndex = dragRef.current;

    if (dragIndex === null) return;

    const currentPlayer = xTurn ? "X" : "O";

    // only current player can move
    if (board[dragIndex] !== currentPlayer) return;

    // destination must be empty
    if (board[dropIndex] !== "") return;

    // only adjacent / diagonal
    if (
      !validMoves[dragIndex].includes(dropIndex)
    ) {
      return;
    }

    const copy = [...board];

    copy[dropIndex] = copy[dragIndex];

    copy[dragIndex] = "";

    setBoard(copy);

    setDraggingIndex(null);

    setXTurn(!xTurn);
  };

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
          : "Drag Pieces"}
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
          const isPossibleMove =
            !isPlacementPhase &&
            draggingIndex !== null &&
            board[index] === "" &&
            validMoves[draggingIndex]?.includes(
              index
            );

          return (
            <button
              key={index}
              onClick={() => {
                if (isPlacementPhase) {
                  placePiece(index);
                }
              }}
              draggable={
                !isPlacementPhase &&
                cell === (xTurn ? "X" : "O")
              }
              onDragStart={() => {
                dragRef.current = index;

                setDraggingIndex(index);
              }}
              onDragEnd={() => {
                setDraggingIndex(null);
              }}
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={() => {
                handleDrop(index);
              }}
              style={{
                width: "110px",
                height: "110px",
                fontSize: "38px",
                fontWeight: "bold",
                borderRadius: "14px",

                border:
                  draggingIndex === index
                    ? "4px solid dodgerblue"
                    : "2px solid #444",

                background: isPossibleMove
                  ? "#caffbf"
                  : "#f1f1f1",

                cursor:
                  !isPlacementPhase &&
                  cell === (xTurn ? "X" : "O")
                    ? "grab"
                    : "pointer",

                transition: "0.2s",

                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.15)",
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
          🟦 Blue Border → Dragging Piece
        </div>

        <div>
          🟩 Green Cell → Allowed Move
        </div>

        <div>
          🔄 Only adjacent / side / diagonal
          moves allowed
        </div>
      </div>
    </div>
  );
};

export default DraggingGameMove;