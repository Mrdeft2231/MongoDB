const categories = require("../models/category");

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({});
  next();
}

const findCategoryById = async (req, res, next) => {
  console.log("GET /categories/:id");
  try {
    req.game = await game.findById(req.params.id)
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ meesage: "Не удалось найти категорию" }));
  }
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
  createCategory,
  findCategoryById
};