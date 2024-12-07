import PlayerModel from "../schemas/Player";

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
        console.log(`Player ${this.name} says wussup!`)
    };

    // save the instance of creating a new player to the database
    async savePlayerToDatabase() {
        const playerData = new PlayerModel({
            name: this.name,
            pieces: this.pieces
        });
        await playerData.savePlayerToDatabase();
        return playerData;
    };

    // find a player by their ID
    static async findPlayerByID(playerId) {
        const foundPlayer = await PlayerModel.findById(playerId);

        if (foundPlayer) {
            const player = new Player(foundPlayer._id, foundPlayer.name);
            player.pieces = foundPlayer.pieces;
            return player;
        }

        return null;
    };

    // find a player by their name
    static async findPlayerByName(playerName) {
        const foundPlayer = await PlayerModel.findOne({ name: playerName });
        
        if (foundPlayer) {
            const player = new Player(foundPlayer._id, foundPlayer.name);
            player.pieces = foundPlayer.pieces;
            return player;
        }
        return null;
    };
};

// const player1 = new Player();

// export default Player;
module.exports = Player;