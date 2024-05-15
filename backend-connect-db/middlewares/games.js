const game = require("../models/game");

const findAllGames = async (req, res, next) => {

  if(req.query["categories.name"]) {
    req.gameArray = await game.findByCategories(req.query["categories.name"]);
    next();
    return;
  }

  const checkIsVoteRequest = async (req, res, next) => {
    // Если в запросе присылают только поле users
  if (Object.keys(req.body).length === 1 && req.body.users) {
    req.isVoteRequest = true;
  }
  next();
  };

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
    req.game = await game.findById(req.params.id).populate("categories").populate("users");
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

const updateGame = async (req, res, next) => {
  try {
    req.game = await game.findByIdAndUpdate(req.params.id, req.body)
    next();
  } catch (error) {
    res.setHeader("Content-Type", "aplication/json");
    res.status(400).send(JSON.stringify({ message: "Ошбика обновления игры" }))
  }
}

const deleteGame = async (req, res, next) => {
  try {
    req.game = await game.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "aplication/json");
    res.status(400).send(JSON.stringify({ message: "Не удалось удалить игру" }));
  }
}

const checkEmptyFields = async (req, res, next) => {
  // if (
  //   !req.body.description ||
  //   !req.body.image ||
  //   !req.body.link ||
  //   !req.body.developer
  // ) {
  //   res.setHeader("Content-Type", "aplication/json");
  //   res.status(400).send(JSON.stringify({ message: "Одно из полей пустое. Заполните все поля" }))
  // } else {
  //   next();
  // }
  if (req.isVoteRequest) {
    next();
    return
  } else {
    res.setHeader("Content-Type", "aplication/json");
    res.status(400).send(JSON.stringify({ message: "Одно из полей пустое. Заполните все поля" }))
  }
};

const checkIfCategoriesAvaliable = async (req, res, next) => {
  // if (!req.body.categories || req.body.categories.length === 0) {
  //   res.setHeader("Content-Type", "aplication/json");
  //   res.status(400).send(JSON.stringify({ message: "Заполните категорию" }));
  // } else {
  //   next();
  // }
  if (req.isVoteRequest) {
    next();
    return
  } else {
    res.setHeader("Content-Type", "aplication/json");
    res.status(400).send(JSON.stringify({ message: "Одно из полей пустое. Заполните все поля" }))
  }
}

const checkIfUsersAreSafe = async (req, res, next) => {
  if (!req.body.users) {
    next();
    return;
  }
  if (req.body.users.length - 1 === req.game.users.length) {
    next();
    return;
  } else {
    res.setHeader("Content-Type", "aplication/json");
    res.status(400).send(JSON.stringify({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" }));
  }
}

const checkIsGameExists = async (req, res, next) => {
  const isInArray = req.gamesArray.find((game) => {
    return req.body.name === game.name
  });

  if (isInArray) {
    res.setHeader("Content-Type", "aplication/json");
    res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
  } else {
    next();
  }

}


module.exports = {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
};