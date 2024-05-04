const gameRouter = require("express").Router();


const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted
} = require("../controllers/games");

gameRouter.get("/games", findAllGames, sendAllGames);
gameRouter.post("/games", findAllGames, checkIsGameExists, createGame, sendGameCreated);
gameRouter.get("/games/:id", findGameById, sendGameById);
gameRouter.put("/games/:id", findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, updateGame, sendGameUpdated );
gameRouter.delete("/games/:id", deleteGame, sendGameDeleted )

module.exports = gameRouter;