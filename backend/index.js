const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());
const carRoutes = require("./routes/carsRoutes");
const flowerRoutes = require("./routes/flowersRoutes");
const treeRoutes = require("./routes/treesRoutes");
app.use(bodyParser.json(app.use(bodyParser.urlencoded({ extended: true }))));

app.all("/", (req, res) => {
  res.send("Welcome to the final API");
});

app.use("/api/cars", carRoutes);
app.use("/api/trees", treeRoutes);
app.use("/api/flowers", flowerRoutes);

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
};
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}`)
);
