const gameRouter = require("express").Router();


const findAllGames = require("../middlewares/games");
const sendAllGames = require("../controllers/games");

gameRouter.get("/games", findAllGames, sendAllGames);

module.exports = gameRouter;