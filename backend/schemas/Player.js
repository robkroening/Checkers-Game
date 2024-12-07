const mongoose = require('mongoose');

// game schema
const playerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        pieces: {
            type: Array,
            required: true,
            default: []
        }
    }
);

// game model
const Player = mongoose.model('Player', playerSchema);

// export
module.exports = Player;