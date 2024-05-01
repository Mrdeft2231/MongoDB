const game = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await game
  .find({})
  .populate({
    path: "users",
    select: "-password"
  })
  .populate("categories");
  next()
}

const findGameById = async (req, res, next) => {
  console.log("GET /game/:id");
  try {
    req.game = await game.findById(req.params.id).populate("categories").populate({
      path: "users",
      select: "-password"
    });
    next();
  } catch {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Не удалось найти игру" }));
  }
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
  createGame,
  findGameById
};