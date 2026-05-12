import React, { useRef, useState } from 'react';

const winPatters = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const MovingTicTacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(''));

    const [xTurn, setXTurn] = useState(true);

    const [focusedIndex, setFocusedIndex] = useState(null);

    const dragRef = useRef(null);

    const handleDrop = (dropIndex) => {

        const { dragIndex, element } = dragRef.current;

        const item = board[dragIndex];

        const newData = [...board];

        newData.splice(dragIndex, 1);

        newData.splice(dropIndex, 0, item);

        setBoard(newData);

        setTimeout(() => {
            element.focus();
        }, 0);
    };

    const checkWinner = (player) => {

        for (let [x, y, z] of winPatters) {

            if (
                player[x] &&
                player[x] === player[y] &&
                player[x] === player[z]
            ) {
                return player[x];
            }
        }

        return null;
    };

    const play = (index) => {

        if (board[index] || checkWinner(board)) return;

        const copy = [...board];

        copy[index] = xTurn ? 'X' : 'O';

        setBoard(copy);

        setXTurn(!xTurn);
    };

    return (
        <div>
            <h3>Moving Tic Tac Toe</h3>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 120px)',
                    gap: '10px'
                }}
            >
                {board.map((cell, index) => (
                    <button key={index}
                        onClick={() => play(index)}
                        draggable
                        tabIndex={0}
                        onDragStart={(event) => {
                            dragRef.current = {
                                dragIndex: index,
                                element: event.currentTarget
                            };
                        }}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(index)}
                        onFocus={() => setFocusedIndex(index)}
                        onBlur={() => setFocusedIndex(null)}

                        style={{
                            height: '90px',
                            fontSize: '28px',
                            cursor: 'grab',
                            background: focusedIndex === index? 'lightblue': '#ddd'
                        }}
                    >
                        {cell}
                    </button>
                ))}
            </div>

            <h2>
                Winner: {checkWinner(board) || "None"}
            </h2>
        </div>
    );
};

export default MovingTicTacToe;