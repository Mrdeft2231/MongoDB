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

module.exports = {
  findAllUsers,
  createUser
};