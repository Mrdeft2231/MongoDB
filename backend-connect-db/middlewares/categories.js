const categories = require("../models/category");

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({});
  next();
}

const createCategory = async (req, res, next) => {
  console.log("POOST /categories")
  try {
    console.log(req.body)
    req.game = await categories.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Не удалось создать категорию" }));
  }
}

module.exports = {
  findAllCategories,
  createCategory
};