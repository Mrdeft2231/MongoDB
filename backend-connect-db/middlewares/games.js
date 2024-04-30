const game = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await game.find({}).populate("users").populate("categories");
  next()
}

module.exports = findAllGames;