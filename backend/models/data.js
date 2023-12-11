const data = {
  flowersData: ["Rose", "SunFlower", "Tulip"],
  treesData: ["Oak", "Maple", "Pine"],
  carsData: ["Sedan", "SUV", "SportCar"],
};

exports.getAllCars = () => {
  return data.carsData;
};
exports.getAllTrees = () => {
  return data.treesData;
};
exports.getAllFlowers = () => {
  return data.flowersData;
};
