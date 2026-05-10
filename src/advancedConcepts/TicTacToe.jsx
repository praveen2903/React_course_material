import React, { useState } from 'react'

const winPatterns = [[0,1,2], [3,4,5],[6,7,8], [0,3,6],[1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    // const [board, setBoard] = useState(Array.from({length: 9}).fill(''));

    const [xTurn, setXTurn] = useState(true);

    const checkWinner = (player) =>{
        for(let [x,y,z] of winPatterns) {
            if(player[x] && player[x] === player[y] && player[x] == player[z]){
                return player[x];
            }
        }
        return null
    }

    const play = (i) => {
        if(board[i] || checkWinner(board)) return ;    
        //if winner no next moves, stop and return & if already filled don't replace

        const copy = [...board];
        copy[i] = xTurn? 'X': "O";
        setBoard(copy);
        setXTurn(!xTurn)
    }

    const winner = checkWinner(board);

    const handleRestart = () =>{
        setBoard(Array(9).fill(''));
        setXTurn(true)
    }

  return (
    <>
    <div>TicTacToe  - using grid and making logic for the game</div>
    <div style={{display:'grid', gridTemplateColumns: 'repeat(3,120px)'}}>
        {board.map((cell,index)=>(
            <button key={index} onClick={()=> play(index)} style={{height:'80px'}}>
                {cell}
            </button>
        ))}
    </div>
    <h3>{winner? `Winner ${winner}`: ""}</h3>
    <button onClick={handleRestart}>Restart</button>
    </>
  )
}

export default TicTacToe