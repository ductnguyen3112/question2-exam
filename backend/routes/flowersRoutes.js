const express = require("express");
const router = express.Router();
const flowersController = require("../controller/controllers");

router.get("/", flowersController.getAllFlowers);

module.exports = router;
