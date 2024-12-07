import PieceModel from "./PieceClass";
import PlayerModel from "../schemas/Player";

// const player1 = new Player();

// everything about the game of chess. what can happen?
// pieces
// board
// players
// make a move
// 
class Game {
    // set
    // constructor - board, players, currentPlayerIndex
    constructor() {
        this.board = this.createBoard();
        this.players = 0;
        this.currentPlayerIndex = 0;
    }
    // methods / variables
    // create a new chess board for a new game
    createBoard() {

    };
    

};

// export default Game;
module.exports = Game;