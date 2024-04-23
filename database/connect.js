const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/pindie"

async function connectToDatabase() {
 try {
  await mongoose.connect(DB_URL);
  console.log("Connected to MongoDB");
 }
 catch (error) {
  console.error("Error connecting to MongoDB:", error);
  
 }
}

module.exports = { connectToDatabase }