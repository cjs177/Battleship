import React from 'react';
import Ship from './Ship';
import Game from './Game';

class Player{
    constructor(player1Turn, player2Turn, player1Type, player2Type){
        this.player1Turn = player1Turn;
        this.player2Turn = player2Turn;
        this.player1Type = player1Type;
        this.player2Type = player2Type;
    }

    playerSetUp(){
        this.player1Board = new Game([],[],"");
        this.player2Board = new Game([],[],"");
        this.player1Board.createGameBoard();
        this.player2Board.createGameBoard();
        this.player1Board.placeShip(3,2);
        this.player1Board.placeShip(13,3);
        this.player1Board.placeShip(23,4);
        
        this.player2Board.placeShip(3,2);
        this.player2Board.placeShip(13,3);
        this.player2Board.placeShip(23,4);

    };


    turnAction(attack=""){
        if(this.player2Type === "CPU" && this.player2Turn === true){
            let targetSquare = Math.floor(Math.random()*100);
            console.log(`first value:${targetSquare}`)
            while(this.player1Board.playerBoard[targetSquare] === "missed" || this.player1Board.playerBoard[targetSquare] === "hit"){
                targetSquare = Math.floor(Math.random()*100);
                console.log(`second value:${targetSquare}`)
            }
            console.log(`third value:${targetSquare}`)
            this.player1Board.recieveAttack(targetSquare);
            this.player2Turn = false;
            this.player1Turn = true;
        }
        else{
            this.player2Board.recieveAttack(attack);
            this.player1Turn = false;
            this.player2Turn = true;
        }
    };
}

export default Player;