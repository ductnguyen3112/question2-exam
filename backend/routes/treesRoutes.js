const express = require('express');
const router = express.Router();
const treesController = require('../controller/controllers');


router.get('/', treesController.getAllTrees);


module.exports = router;