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
    
    placeShip(shipPosition, len, adj) {
            this.newShip = new Ship(len,false,[]);
            this.shipContainer.push(this.newShip);
            for(let i = 0; i < len; i++){
                if(adj === "column" && i > 0){
                    if(shipPosition+(10*i) >89){
                        this.playerBoard[shipPosition-(10*i)] = "ship";
                    }
                    this.playerBoard[shipPosition+(10*i)] = "ship";
                }
                else
                this.playerBoard[shipPosition+i] = "ship";
            }
        };

    placeCpuShip(shipPosition, len, adj) {
            this.newShip = new Ship(len,false,[]);
            this.shipContainer.push(this.newShip);
            for(let i = 0; i < len; i++){
                if(adj === "column" && i > 0){
                    if(shipPosition+(10*i) >89){
                        this.playerBoard[shipPosition-(10*i)] = "cpuShipSquare";
                    }
                    this.playerBoard[shipPosition+(10*i)] = "cpuShipSquare";
                }
                else
                this.playerBoard[shipPosition+i] = "cpuShipSquare";
            }
        };
    gameOver() {
            if (this.playerBoard.filter(gameState => gameState === "ship").length === 0 && this.playerBoard.filter(gameState => gameState === "cpuShipSquare").length === 0){
                alert('Game Over');
            }
        };

    recieveAttack(attack) {
            if(this.playerBoard[attack] === 'empty'){
                this.playerBoard[attack] = 'missed';
            }
            else if(this.playerBoard[attack] === 'ship' || this.playerBoard[attack] === 'cpuShipSquare'){
                this.playerBoard[attack] = 'hit';
                this.newShip.hit(attack);
            }
            this.gameOver();
        };

    //return (

    //);
};

export default Game;