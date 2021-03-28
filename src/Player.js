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
    };

    turnAction(){
        if(this.player2Type === "CPU" && this.player2Turn === true){
            let targetSquare = Math.floor(Math.random()*100);
            while(this.player1Board.playerBoard[targetSquare] !== "empty"){
                targetSquare = Math.floor(Math.random()*100);
            }
            this.player1Board.recieveAttack(targetSquare);
            this.player2Turn = false;
            this.player1Turn = true;
        }
        else{
            this.player1Turn = false;
            this.player2Turn = true;
        }
    };
}

export default Player;