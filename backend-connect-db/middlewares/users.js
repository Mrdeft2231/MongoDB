
const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
}


const createUser = async (req, res, next) => {
  console.log("POOST /users")
  try {
    console.log(req.body)
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Не удалось создать пользователя" }));
  }
}

const findUserById = async (req, res, next) => {
  console.log("GET /users/:id");
  try {
    req.user = await users.findById(req.params.id)
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "не удалось найти пользователей" }))
  }
}

module.exports = {
  findAllUsers,
  createUser,
  findUserById
};

// Проблема в роуте