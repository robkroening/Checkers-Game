
class Player {
    // sets
    // constructor
    constructor(id, name, pieces) {
        this.id = id;
        this.name = name;
        this.pieces = [];
    };
    // methods / variables
    // add a piece to the players collection
    addPiece(piece) {
        this.pieces.push(piece);
    };
    // remove a piece from the players collection
    removePiece(piece) {
        const index = this.pieces.indexOf(piece);
        if (index !== -1) {
            this.pieces.splice(index, 1)
        };
    };
    // greet the other player
    greet() {
        console.log(`Player ${this.id} says wussup!`)
    };
}

// export default Player;
module.exports = Player;