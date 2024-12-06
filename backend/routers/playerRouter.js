const express = require('express');
const router = express.Router();
const Player = require('../schemas/Player');

// gets all players involved
router.get('/', async (req, res) => {
    try {
        const allPlayers = await Player.find();
        res.json(allPlayers);
    } catch (error) {
        console.log(error);
    }
});

// gets a player by their id
router.get('/:playerId', async (req, res) => {
    try {
        const playerId = req.params.playerId;
        const player = await Player.findById(playerId);
        res.json(player);
    } catch (error) {
        console.log(error);
    }
});

// creates a new player
router.post('/', async (req, res) => {
    try {
        const newPlayer = await Player.create(req.body);
        res.json(newPlayer)
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;