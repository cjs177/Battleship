import Game from '../Game';

describe('game factory', ()=> {
    //let ship1;
    //let ship2;
    let player1Board;
    beforeEach(() => {
        //ship1 = new Ship(2,false,[]);
        //ship2 = new Ship(4,false,[]);
        player1Board = new Game([],[],"");
        //player1board.createGameBoard();
    });
    it('board has 100 spaces', () => {
        player1Board.createGameBoard();
        expect(player1Board.playerBoard.length).toEqual(100);
    });
    it('board spaces are filled', () => {
        player1Board.createGameBoard();
        expect(player1Board.playerBoard.filter(element => element !== "empty")).toEqual([]);
    });
    it('ship placed', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(5,3);
        expect(player1Board.playerBoard[5]).toEqual("ship");
    });
    it('ship middle placed', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(5,3);
        expect(player1Board.playerBoard[6]).toEqual('ship');
    });
    it('ship end placed', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(5,3);
        expect(player1Board.playerBoard[7]).toEqual('ship');
    });
    it('ship not too long', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(25,4);
        expect(player1Board.playerBoard[29]).toEqual('empty');
    });
    it('ship recieves attack', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(5,3);
        player1Board.recieveAttack(5);
        expect(player1Board.playerBoard[5]).toEqual('hit');
    });
    it('ship recieves multiple attacks', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(5,3);
        player1Board.recieveAttack(5);
        player1Board.recieveAttack(6);
        player1Board.recieveAttack
        expect(player1Board.playerBoard.filter(element => element === "hit").length).toEqual(2);
    });
    it('attack misses', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(5,3);
        player1Board.recieveAttack(15);
        expect(player1Board.playerBoard[15]).toEqual('missed');
    });
    it('ship recieves multiple misses', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(5,3);
        player1Board.recieveAttack(15);
        player1Board.recieveAttack(36);
        player1Board.recieveAttack(22);
        player1Board.recieveAttack
        expect(player1Board.playerBoard.filter(element => element === "missed").length).toEqual(3);
    });
    it('game over works', () => {
        player1Board.createGameBoard();
        player1Board.placeShip(5,3);
        player1Board.recieveAttack(5);
        player1Board.recieveAttack(6);
        player1Board.recieveAttack(7);
        expect(player1Board.playerBoard.filter(gameState => gameState === "ship").length).toEqual(0);
    });

});