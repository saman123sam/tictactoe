import React, {useState, useEffect} from 'react';
import SquareComponent from './SquareComponent'
const initialState= ["", "", "", "", "", "", "", "", "", ""];


function App() {
  const [gameState,updateGameState] =useState(initialState);
  const [isXChance, updateIsXChance]= useState(false);

  const onSquaredClicked = (index) => {
    let strings =Array.from(gameState);
    strings[index] = isXChance ? "X" : "0";
    updateGameState(strings);
    updateIsXChance(!isXChance);
  }

  useEffect(() => {
    const winner = checkWinner();
    if(winner){
      alert (`Ta da ! ${winner} won the Game!`)
      updateGameState(initialState)

    }

  }, [gameState])

    const checkWinner = () => {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
              return gameState[a];
            }
         }
          return null;
  }




  return (
         <div className="app-header">
            <p className="heading-text">Tic Tac Toe Intern</p>
            <div className="row jc-center">
              <SquareComponent className="b-bottom-right" state={gameState[0]}  onClick={() => onSquaredClicked(0)} />
              <SquareComponent className="b-bottom-right"state={gameState[1]} onClick={() => onSquaredClicked(1)}/>
              <SquareComponent className="b-bottom"state={gameState[2]} onClick={() => onSquaredClicked(2)}/>
            </div>
            <div className="row jc-center">
            <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={() => onSquaredClicked(3)}/>
            <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={() => onSquaredClicked(4)}/>
            <SquareComponent className="b-bottom" state={gameState[5]} onClick={() => onSquaredClicked(5)} />
            </div>
            <div className="row jc-center">
            <SquareComponent className="b-right" state={gameState[6]} onClick={() => onSquaredClicked(6)} />
            <SquareComponent className="b-right" state={gameState[7]} onClick={() => onSquaredClicked(7)}/>
            <SquareComponent state={gameState[8]} onClick={() => onSquaredClicked(8)} />
            </div>
            <button className="clear-button" onClick={() =>updateGameState(initialState)}>Try Again </button>
            <p className="fc-aqua fw-600">Intern</p>
      
    </div>
  ); 
}

export default App;
