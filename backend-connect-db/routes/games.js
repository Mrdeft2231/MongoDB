const gameRouter = require("express").Router();


const {
  findAllGames,
  createGame
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated
} = require("../controllers/games");

gameRouter.get("/games", findAllGames, sendAllGames);
gameRouter.post("/games", findAllGames, createGame, sendGameCreated);

module.exports = gameRouter;