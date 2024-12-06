const mongoose = require('mongoose');

// game schema
const playerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        record: {
            type: String,
            required: false,
        }
    }
);

// game model
const Player = mongoose.model('Player', playerSchema);

// export
module.exports = Player;