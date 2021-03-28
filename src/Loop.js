import style from "../src/css/style.css"
import React, { useEffect, useState } from 'react';
import Ship from './Ship';
import Game from './Game';
import Player from './Player';

const Loop = () => {

    let playGame = new Player(true,false,"human","CPU");
    playGame.playerSetUp();
        let grid = [];
        let cpuGrid = [];
        for(let i = 0; i < 100; i++){
            if(playGame.player1Board.playerBoard[i] === "ship"){
                grid.push(<div/>)
            }
            else{
                grid.push(<div/>)
            }
            if(playGame.player2Board.playerBoard[i] === "ship"){
                cpuGrid.push(<div className="square cpuShipSquare"/>)
            }
            else{
                cpuGrid.push(<div className="square"/>)
            }
            }

   const [humanGrid, sethumanGrid] = useState(grid);
    const displayShips = (e) => {
        e.preventDefault();
        for(let i = 0; i < 100; i++){
            if(playGame.player1Board.playerBoard[i] === "ship"){
            }
        }
    };
   const showHit = (e) =>{
       e.preventDefault();
       if(e.target.className === "square cpuShipSquare"){
        e.target.className = "square hit";
        playGame.turnAction(e.target.parentNode.id);
        cpuTurn();
        for(let i = 0; i < 100; i++){
            if(playGame.player1Board.playerBoard[i] === "hit"){

            }
        }
        
       }
       else if(e.target.className === "square"){
        e.target.className = "square miss";
        playGame.turnAction(e.target.parentNode.id);
        cpuTurn();
        for(let i = 0; i < 100; i++){
            if(playGame.player1Board.playerBoard[i] === "empty"){
            }
        }
       }
       
       else
       return;
   };

   const cpuTurn = () => {
    playGame.turnAction();
    for(let i = 0; i < 100; i++){
        if(playGame.player1Board.playerBoard[i] === "missed"){
            console.log(playGame.player1Board.playerBoard);  
        }
    }
   };
   return(
       <div className ="gridContainer">
<div className="grid">
    {humanGrid.map((square, squareID) => {
        {console.log(playGame.player1Board.playerBoard[squareID])};
        return(
            <div className={`${playGame.player1Board.playerBoard[squareID] === "ship"? 'square shipSquare':playGame.player1Board.playerBoard[squareID] === "missed"? 'square miss':'square'}`} id={squareID} >{`${playGame.player1Board.playerBoard[squareID] === "missed"? 'X':''}`}
            </div>
        );
    })}
</div>
<div className="grid">
    {cpuGrid.map((cpuSquare, cpuSquareID) => {
        return(
            <div onClick={showHit} id={cpuSquareID}>{cpuSquare}</div>
        );
    })}
</div>
<button className = "startBtn" id={displayShips}>Start</button>
</div>
   );

};

export default Loop;