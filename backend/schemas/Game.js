const mongoose = require('mongoose');

// game schema
const gameSchema = new mongoose.Schema(
    {
        board: {
            type: Array,
            required: true
        },

        currentPlayer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        },

        winner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        },

        createdAt: {
            type: Date,
            default: Date.now
        },

        updatedAt: {
            type: Date,
            default: Date.now
        },
    },

    { timestamps: true }

);

// game model
const Game = mongoose.model('Game', gameSchema);

// export
module.exports = Game;