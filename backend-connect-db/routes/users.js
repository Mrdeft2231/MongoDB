const usersRouter = require("express").Router();

const {
  findAllUsers,
  createUser,
  findUserById
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserByIdById
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.get("/users/:id", findUserById, sendUserByIdById);

module.exports = usersRouter;