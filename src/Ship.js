class Ship {
    constructor(len,sunk,hits){
        this.len = len;
        this.sunk = sunk;
        this.hits = hits;

    }

    //let positions = [];
    hit(position) {
        this.hits.push(position);
        this.isSunk();
    };

    isSunk(){
        if (this.hits.length === this.len){
            //remainingShips -= 1;
            this.sunk = true;
       } 
        
    };
};

export default Ship;