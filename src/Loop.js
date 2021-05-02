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
    playerBoard: playGame.player2Board.playerBoard,
    cpuClass: "empty",
    shipLength: 5,
    shipSquare: 0,
    shipAlignment: "row",
    counter: 0,
    setUpGrid: "gridVisible",
    grids: "gridHidden",
    }
}

showHit = (e) =>{

    if(e.target.className === "square ship" || e.target.className === "square cpuShipSquare"){
        e.target.className = "square hit";
        playGame.turnAction(e.target.id);
        playGame.turnAction();
        this.setState({
        cpuBoard: playGame.player1Board.playerBoard,
        playerBoard: playGame.player2Board.playerBoard
        }); 
    }
    else if(e.target.className === "square empty"){
        e.target.className = "square missed";
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

PlayerChange = (props) =>{
    return <div className={`square ${props.playerHit}`} >{''}</div>
}

updateLength = (e) => {
    this.setState({
        shipLength: e.target.value,
        }); 
};

updateSquare = (e) => {
    this.setState({
        shipSquare: e.target.value - 1,
        }); 
};

updateAlignment = (e) => {
    this.setState({
        shipAlignment: e.target.value,
        }); 
};

placeShip = (e) => {
    e.preventDefault();
    if(this.state.counter === 5){
        return;
    }
    let placement = parseInt(this.state.shipSquare);
    let size = parseInt(this.state.shipLength);
    let alignment = this.state.shipAlignment;
    if( size > 10){
        alert("invalid");
        return;
    }

    else if(placement % 10 + size > 10){
        alert("invalid");
        return;
    }

    else{
    for(let i = 0; i < size; i++){
        if(alignment === "row" && this.state.cpuBoard[placement+i] === "ship"){
            alert("invalid");
            return;
        }
    }}
    //let temp = prompt("enter a square for the ship?(0-99)",0);
    //let placement1 = parseInt(temp);
    //temp = prompt("enter a square for the second ship?(0-99)",0);
    //let placement2 = parseInt(temp);
    //temp = prompt("enter a square for the third ship?(0-99)",0);
    //let placement3 = parseInt(temp);
    playGame.player1Board.placeShip(placement,size,alignment);
    //playGame.player1Board.placeShip(placement2,3);
    //playGame.player1Board.placeShip(placement3,4);
    this.setState({
        cpuBoard: playGame.player1Board.playerBoard,
        playerBoard: playGame.player2Board.playerBoard,
        counter: this.state.counter+1,
        }); 

};

removeGrid = (e) =>{
    e.preventDefault();
    if(this.state.counter === 5){
        this.setState({
            setUpGrid: "gridHidden",
            grids: "gridVisible",
        });
    }

};

/*resetGame = (e) =>{
    e.preventDefault();
    for(let i = 0; i < playGame.player1Board.playerBoard.length; i++){
        playGame.player1Board.playerBoard[i] ='empty';
        playGame.player2Board.playerBoard[i] ='empty';
    }
    console.log(playGame.player2Board.playerBoard);
    playGame = new Player(true,false,"human","CPU");
    playGame.playerSetUp();
    this.setState({
        cpuBoard: playGame.player1Board.playerBoard,
        playerBoard: playGame.player2Board.playerBoard,
        cpuClass: "empty",
        //setUpGrid: "gridVisible",
        //grids: "gridHidden",
        counter:  0,
    });
};*/

render(){
    const { cpuBoard, playerBoard } = this.state;
    return(
        <div className ="gridContainer">
        <div className={this.state.setUpGrid}>
            {cpuBoard.map((square, squareID) => {
            return(
                <this.CpuChange whetherHit={square} className={square}/>
            );
           })}
           <form className = "formStyle">
               <div className = "numBtns">
                   <input type="number" min="1" max="100" onChange={this.updateSquare}/>
                   <input type="number" min="1" max="5" onChange={this.updateLength}/>
               </div>
               <div className="alignmentBtns">
                   <input type="radio" value="row" name="shipAdj" onClick={this.updateAlignment}/>
                   <label for="">Row</label>
                   <input type="radio" value="column" name="shipAdj" onClick={this.updateAlignment}/>
                   <label for="">Column</label>
               </div>
               <div className="btns">
                   <div className="shipBtn" onClick={this.placeShip}>Place Ship</div>
                   <div className="startBtn" onClick={this.removeGrid}>Start Game</div>
               </div>
           </form>
        </div>
        <div className={this.state.grids}>
        {cpuBoard.map((square, squareID) => {
        return(
            <this.CpuChange whetherHit={square} className={square}/>
        );
        })}
        </div>
        <div className={this.state.grids}>
        {playerBoard.map((cpuSquare, cpuSquareID) => {
          return(
                    <div className={`square ${this.state.cpuClass}`} onClick={this.showHit}>{''}</div>
                );
        })}
        </div>
    </div>
    );
  }
};

export default Loop;