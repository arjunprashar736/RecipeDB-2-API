const Recipe = require('../models/recipe');

exports.getRecipeByTitle = async (req, res) => {
  try {
    const { title } = req.query; 

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Recipe title is required.',
      });
    }

    const recipes = await Recipe.find(
      { Recipe_title: { $regex: title, $options: 'i' } }, 
      {
        _id: 1,
        Recipe_id: 1,
        Calories: 1,
        cook_time: 1,
        prep_time: 1,
        servings: 1,
        Recipe_title: 1,
        total_time:1,
        Region:1,
        Continent:1,
      } 
    );

    if (recipes.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No recipes found with the given title.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Recipes fetched successfully.',
      data: recipes,
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching recipes.',
      error: error.message,
    });
  }
};
