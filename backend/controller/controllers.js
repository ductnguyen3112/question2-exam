const datas = require("../models/data");

exports.getAllCars = (req, res) => {
  const data = datas.getAllCars();
  res.json(data);
};

exports.getAllTrees = (req, res) => {
  const data = datas.getAllTrees();
  res.json(data);
};

exports.getAllFlowers = (req, res) => {
  const data = datas.getAllFlowers();
  res.json(data);
};
