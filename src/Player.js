import React from 'react';
import Ship from './Ship';
import Game from './Game';

class Player{
    constructor(player1Turn, player2Turn, player1Type, player2Type){
        this.player1Turn = player1Turn;
        this.player2Turn = player2Turn;
        this.player1Type = player1Type;
        this.player2Type = player2Type;
        this.storedValue = 0;
        this.foundShip = false;
    }

    playerSetUp(){
        this.player1Board = new Game([],[],"");
        this.player2Board = new Game([],[],"");
        this.player1Board.createGameBoard();
        this.player2Board.createGameBoard();
        this.turn();

    };

    turn(){
        let cpuPlacement = Math.floor(Math.random()*100);
        let cpuAlightment = this.randomAlighnment();
        this.turnLoop(cpuPlacement,5, cpuAlightment);

        cpuPlacement = Math.floor(Math.random()*100);
        cpuAlightment = this.randomAlighnment();
        this.turnLoop(cpuPlacement,4, cpuAlightment);
        
        cpuPlacement = Math.floor(Math.random()*100);
        cpuAlightment = this.randomAlighnment();
        this.turnLoop(cpuPlacement,3, cpuAlightment);
        
        cpuPlacement = Math.floor(Math.random()*100);
        cpuAlightment = this.randomAlighnment();
        this.turnLoop(cpuPlacement,3, cpuAlightment);
        
        cpuPlacement = Math.floor(Math.random()*100);
        cpuAlightment = this.randomAlighnment();
        this.turnLoop(cpuPlacement,2, cpuAlightment);
    }
    randomAlighnment(){
        let alighnment = Math.floor(Math.random()*100);
        if (alighnment > 50){
            return "column";
        }
        return "row";
    }
    turnLoop(cpuPlacement,size, cpuAlightment = "row"){
     for(let i = 0; i < size; i++){
         if(cpuAlightment === "row"){
            if(this.player2Board.playerBoard[cpuPlacement+i] === "cpuShipSquare" || cpuPlacement % 10 + size > 10){
                let cpuPlacement2 = Math.floor(Math.random()*100);
                this.turnLoop(cpuPlacement2,size)
                return;
            }
         }
         else if(cpuAlightment === "column"){
            if(this.player2Board.playerBoard[cpuPlacement+(i*10)] === "cpuShipSquare" || cpuPlacement+(i*10) > 89){
                let cpuPlacement2 = Math.floor(Math.random()*100);
                this.turnLoop(cpuPlacement2,size)
                return;
            }
         }

     }
     if(cpuAlightment === 'row'){
        for(let i = 0; i < size; i++){
        if(this.player2Board.playerBoard[cpuPlacement+i] !== "cpuShipSquare"){
        this.player2Board.placeCpuShip(cpuPlacement,size);
     }
    }
    }
    console.log(cpuAlightment);
    if(cpuAlightment === 'column'){
        console.log("column placed");
        for(let i = 0; i < size; i++){
        if(this.player2Board.playerBoard[cpuPlacement+(i*10)] !== "cpuShipSquare"){
        this.player2Board.placeCpuShip(cpuPlacement,size,cpuAlightment);
         }
     }

     console.log("placed");
    }
}

    turnAction(attack=""){
        if(this.player2Type === "CPU" && this.player2Turn === true){
            let targetSquare = Math.floor(Math.random()*100)
            let storedNum = 0;
            console.log(this.storedValue);
            if(this.player1Board.playerBoard[this.storedValue] === "hit"){
                this.foundShip = true;
                if((this.player1Board.playerBoard[this.storedValue-10] !== "hit" && this.storedValue > 9) && (this.player1Board.playerBoard[this.storedValue-10] !== "missed" && this.storedValue > 9)){
                    this.player1Board.recieveAttack(this.storedValue-10);
                    this.player2Turn = false;
                    this.player1Turn = true;
                    console.log("top check");
                }
                else if((this.player1Board.playerBoard[this.storedValue+1] !== "hit" && this.storedValue % 10 !== 9) && (this.player1Board.playerBoard[this.storedValue+1] !== "missed" && this.storedValue % 10 !== 9)){
                    this.player1Board.recieveAttack(this.storedValue+1);
                    this.player2Turn = false;
                    this.player1Turn = true;
                    console.log("right check");
                }
                else if((this.player1Board.playerBoard[this.storedValue+10] !== "hit"  && this.storedValue < 90) && (this.player1Board.playerBoard[this.storedValue+10] !== "missed"  && this.storedValue < 90)){
                    this.player1Board.recieveAttack(this.storedValue+10);
                    this.player2Turn = false;
                    this.player1Turn = true;
                    console.log("bottom check");
                }
                else if ((this.player1Board.playerBoard[this.storedValue-1] !== "hit" && this.storedValue % 10 !== 0) && (this.player1Board.playerBoard[this.storedValue-1] !== "missed" && this.storedValue % 10 !== 0)){
                    this.player1Board.recieveAttack(this.storedValue-1);
                    this.player2Turn = false;
                    this.player1Turn = true;
                    console.log("left check");
                }
                else{
                    this.foundShip = false
                }
            }

            {
                while(this.player1Board.playerBoard[targetSquare] === "missed" || this.player1Board.playerBoard[targetSquare] === "hit"){
                    targetSquare = Math.floor(Math.random()*100);
                }
               
                if (this.foundShip === false){
                    this.storedValue = targetSquare;
                    this.player1Board.recieveAttack(targetSquare);
                    this.player2Turn = false;
                    this.player1Turn = true;
                }
            }

            }
   
            
        else{
            this.player2Board.recieveAttack(attack);
            this.player1Turn = false;
            this.player2Turn = true;
        }
    };
}

export default Player;