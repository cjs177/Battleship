import React from 'react';
import Ship from './Ship';

class Game {
   constructor(playerBoard ,shipContainer, newShip){
       this.playerBoard = playerBoard;
       this.shipContainer = shipContainer;
       this.newShip = newShip;
   }
    //let remainingShips = 5;
    //let gameBoard = [];


    createGameBoard() {
        for(let i = 0; i < 100; i++){
            this.playerBoard[i] = 'empty';
        }
    };
    
    placeShip(shipPosition, len) {
            this.newShip = new Ship(len,false,[]);
            this.shipContainer.push(this.newShip);
            for(let i = 0; i < len; i++){

                this.playerBoard[shipPosition+i] = "ship";
            }
        };

    gameOver() {
            if (this.playerBoard.filter(gameState => gameState === "ship").length === 0){
                alert('Game Over');
            }
        };

    recieveAttack(attack) {
            if(this.playerBoard[attack] === 'empty'){
                this.playerBoard[attack] = 'missed';
            }
            else if(this.playerBoard[attack] === 'ship'){
                this.playerBoard[attack] = 'hit';
                this.newShip.hit(attack);
            }
            this.gameOver();
        };

    //return (

    //);
};

export default Game;