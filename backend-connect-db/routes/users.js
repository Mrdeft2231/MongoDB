const usersRouter = require("express").Router();

const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDelete
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", findUserById, updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", deleteUser, sendUserDelete)

module.exports = usersRouter;