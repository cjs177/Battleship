import Ship from "../Ship";

describe('ship factory', ()=> {
let ship1;
let ship2;
beforeEach(() => {
    ship1 = new Ship(2,false,[]);
    ship2 = new Ship(4,false,[]);
});
it('hit works', () => {
    ship1.hit(23);
    expect(ship1.hits).toEqual([23]);
});

it('hit works multiple times', () => {
    ship1.hit(23);
    ship1.hit(15);
    expect(ship1.hits).toEqual([23,15]);
});

it('sunk works', () => {
    ship2.hit(23);
    ship2.hit(15);
    ship2.hit(35);
    ship2.hit(5);
    ship2.isSunk()
    expect(ship2.sunk).toEqual(true);
});

it('ship not sun', () => {
    ship2.hit(23);
    ship2.hit(15);
    ship2.hit(35);
    ship2.isSunk()
    expect(ship2.sunk).toEqual(false);
});

});