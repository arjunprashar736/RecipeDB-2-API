const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipebynameController');

router.get('/recipeByTitle', recipeController.getRecipeByTitle);

module.exports = router;
