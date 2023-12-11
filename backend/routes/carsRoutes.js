const express = require('express');
const router = express.Router();
const carsController = require('../controller/controllers');


router.get('/', carsController.getAllCars);


module.exports = router;