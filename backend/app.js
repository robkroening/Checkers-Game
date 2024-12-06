const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/checkersgame_db');

// routers
const playerRouter = require('./routers/playerRouter');
app.use('/players', playerRouter);

// error handler

// listener
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});