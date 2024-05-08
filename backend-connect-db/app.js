const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const apiRouter = require("./routes/apiRouter");
const connectToDatabase = require("./database/connect");

const PORT = 3000;

const app = express();
connectToDatabase();

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  apiRouter
);


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
})