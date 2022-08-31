import React, {useState} from 'react';
import './tictactoe.css'


const TicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner]=useState()

    const checkWinner = (squares) => {
        const winningCombos = {
            horizontal:[
                [0,1,2],[3,4,5],[6,7,8]
            ],
            vertical:[
                [0,3,6],[1,4,7],[2,5,8]
            ],
            diagonal:[
                [0,4,8],[2,4,6]
            ]

        }

        for(let key in winningCombos){
            winningCombos[key].forEach(el=>{
                if(squares[el[0]]!=='' && squares[el[1]]!=='' && squares[el[2]]!=='' &&
                    squares[el[0]]===squares[el[1]] && squares[el[0]]===squares[el[2]]
                ){
                   setWinner(squares[el[0]]);
                }
            })
        }
    }

    const handleCellClick = (num) => {
        if (cells[num] !== '') return;
        const squares = [...cells];
        squares[num] = currentPlayer;
        if (currentPlayer === 'X') setCurrentPlayer('O');
        else setCurrentPlayer('X');
        setCells(squares);
        checkWinner(squares);
    }

    const resetGame=()=>{
        setCells(Array(9).fill(''));
        setCurrentPlayer('X');
        setWinner(undefined);
    }

    const Cell = ({num}) => {
        return (<td onClick={() => handleCellClick(num)}>{cells[num]}</td>)
    }

    return (
        <div className='game-container'>
            <table>
                <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
                </tbody>
            </table>

            {winner && <div>{`Winner is ${winner}`}</div>}
            <button className='button-reset' onClick={resetGame}>Start New Game</button>
        </div>
    );
};

export default TicTacToe;
