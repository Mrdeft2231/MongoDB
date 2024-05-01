const game = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await game.find({}).populate("users").populate("categories");
  next()
}

const createGame = async (req, res, next) => {
  console.log("POOST /games")
  try {
    console.log(req.body)
    req.game = await game.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Не удалось создать игру" }));
  }
  
}

module.exports = {
  findAllGames,
  createGame
};