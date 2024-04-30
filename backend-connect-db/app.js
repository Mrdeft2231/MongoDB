const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const gameRouter = require("./routes/games");
const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");
const connectToDatabase = require("./database/connect");

const PORT = 3000;

const app = express();
connectToDatabase();

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  usersRouter,
  gameRouter,
  categoriesRouter
);


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
})