const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/pindie";

async function connectToDatabase() {
try {
  await mongoose.connect(DB_URL);
  console.log("Успешное подключение к базе");
} catch (err) {
  console.log("Не удалось подключиться к базе");
  console.log(err);
}

}

module.exports = connectToDatabase;