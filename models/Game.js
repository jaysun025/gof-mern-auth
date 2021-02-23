const mongoose = require('../db/connection')

const gameSchema = new mongoose.Schema({
    title: String,
    genre: String

})

module.exports = mongoose.model('Game', gameSchema)