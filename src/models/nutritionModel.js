const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
  Recipe_id: String,
  ndb_id: String,
  "Ash (g)": String,
  "Calcium, Ca (mg)": String,
  "Carbohydrate, by difference (g)": String,
  "Cholesterol (mg)": String,
  "Copper, Cu (mg)": String,
  "Energy (kJ)": String,
  "Energy (kcal)": String,
  "Fatty acids, total monounsaturated (g)": String,
  "Fatty acids, total polyunsaturated (g)": String,
  "Fatty acids, total saturated (g)": String,
  "Fatty acids, total saturated 14:0 (g)": String,
  "Fatty acids, total saturated 16:0 (g)": String,
  "Fatty acids, total saturated 16:1 undifferentiated (g)": String,
  "Fatty acids, total saturated 18:0 (g)": String,
  "Fatty acids, total saturated 18:1 undifferentiated (g)": String,
  "Fatty acids, total saturated 18:2 undifferentiated (g)": String,
  "Fiber, total dietary (g)": String,
  "Folate, DFE (g)": String,
  "Folate, food (g)": String,
  "Folate, total (g)": String,
  "Folic acid (g)": String,
  "Iron, Fe (mg)": String,
  "Magnesium, Mg (mg)": String,
  "Manganese, Mn (mg)": String,
  "Niacin (mg)": String,
  "Phosphorus, P (mg)": String,
  "Phytosterols (mg)": String,
  "Potassium, K (mg)": String,
  "Protein (g)": String,
  "Retinol (g)": String,
  "Riboflavin (mg)": String,
  "Selenium, Se (g)": String,
  "Sodium, Na (mg)": String,
  "Thiamin (mg)": String,
  "Total lipid (fat) (g)": String,
  "Vitamin A, IU (IU)": String,
  "Vitamin A, RAE (g)": String,
  "Vitamin B-12 (g)": String,
  "Vitamin C, total ascorbic acid (mg)": String,
  "Vitamin D (D2 + D3) (g)": String,
  "Vitamin D (IU)": String,
  "Water (g)": String,
  "Zinc, Zn (mg)": String
}, { collection: 'RecipeDB_ingredient_nutrition' });

module.exports = mongoose.model('Nutrition', nutritionSchema);