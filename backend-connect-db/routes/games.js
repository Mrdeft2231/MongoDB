const gameRouter = require("express").Router();


const {
  findAllGames,
  createGame,
  findGameById
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameById
} = require("../controllers/games");

gameRouter.get("/games", findAllGames, sendAllGames);
gameRouter.post("/games", findAllGames, createGame, sendGameCreated);
gameRouter.get("games/:id", findGameById, sendGameById)

module.exports = gameRouter;