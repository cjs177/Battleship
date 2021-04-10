import style from "../src/css/style.css"
import React, { Component, useEffect, useState } from 'react';
import Ship from './Ship';
import Game from './Game';
import Player from './Player';

let playGame = new Player(true,false,"human","CPU");
playGame.playerSetUp();

class Loop extends Component {
constructor(props) {
super(props);

this.state = {
    cpuBoard: playGame.player1Board.playerBoard,
    playerBoard: playGame.player2Board.playerBoard

    }
}

showHit = (e) =>{
    e.preventDefault();
    if(e.target.className === "square ship"){
        e.target.className = "square hit";
        playGame.turnAction(e.target.id);
        playGame.turnAction();
        this.setState({
        cpuBoard: playGame.player1Board.playerBoard,
        playerBoard: playGame.player2Board.playerBoard
        }); 
    }
    else if(e.target.className === "square empty"){
        e.target.className = "square miss";
        playGame.turnAction(e.target.parentNode.id);
        playGame.turnAction();
    this.setState({
        cpuBoard: playGame.player1Board.playerBoard,
        playerBoard: playGame.player2Board.playerBoard
        });
    }
else
return;
};
CpuChange = (props) =>{
return <div className={`square ${props.whetherHit}`} >{''}</div>
};
render(){
const { cpuBoard } = this.state;
return(
<div className ="gridContainer">
<div className="grid">
{cpuBoard.map((square, squareID) => {
return(
<this.CpuChange whetherHit={square} className={square}/>
);
})}
</div>
<div className="grid">
{playGame.player2Board.playerBoard.map((cpuSquare, cpuSquareID) => {
return(
<div className={`square ${cpuSquare}`} onClick={this.showHit} id={cpuSquareID}>{''}</div>
);
})}
</div>
</div>
);
}
};

export default Loop;