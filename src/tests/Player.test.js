import Player from '../Player';

describe('player class', () => {
    let newGame;
    beforeEach(() => {
      newGame = new Player(true,false,"human","CPU")
    });
    it('player 1 setup', () => {
        newGame.playerSetUp();
        expect(newGame.player1Board.playerBoard.length).toEqual(100);
    });
    it('player 2 setup', ()=> {
        newGame.playerSetUp();
        expect(newGame.player2Board.playerBoard.length).toEqual(100);
    });
    it('player 1 turn change', ()=> {
        newGame.playerSetUp();
        newGame.turnAction();
        expect(newGame.player1Turn).toEqual(false);
    });
    it('player 2 turn change', ()=> {
        newGame.playerSetUp();
        newGame.turnAction();
        expect(newGame.player2Turn).toEqual(true);
    });
    it('random hit works', ()=> {
        newGame.playerSetUp();
        newGame.turnAction();
        newGame.turnAction();
        expect(newGame.player1Board.playerBoard.filter(element => element !== "empty").length).toEqual(1);
    });
    it('multiple random hit works', ()=> {
        newGame.playerSetUp();
        newGame.turnAction();
        newGame.turnAction();
        newGame.turnAction();
        newGame.turnAction();
        newGame.turnAction();
        newGame.turnAction();
        expect(newGame.player1Board.playerBoard.filter(element => element !== "empty").length).toEqual(3);
    });
    it('number skip works', ()=> {
        newGame.playerSetUp();
        for(let i = 0; i < 100; i++){
            newGame.turnAction();
            newGame.turnAction();
        }

        expect(newGame.player1Board.playerBoard.filter(element => element !== "empty").length).toEqual(100);
    });
});
//});