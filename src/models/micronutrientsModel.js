const mongoose = require('mongoose');

const micronutrientSchema = new mongoose.Schema({
    Recipe_index: { type: String, required: true },
    Recipe_id: { type: String, required: true, unique: true },
    cook_time: { type: String },
    prep_time: { type: String },
    Recipe_title: { type: String, required: true },
    url: { type: String },
    servings: { type: String },
    Source: { type: String },
    img_url: { type: String },
    Adjusted_Protein: { type: String },
    Alanine: { type: String },
    Alcohol_ethyl: { type: String },
    Arginine: { type: String },
    Ash: { type: String },
    Aspartic_acid: { type: String },
    Beta_sitosterol: { type: String },
    Betaine: { type: String },
    Caffeine: { type: String },
    Calcium_Ca: { type: String },
    Campesterol: { type: String },
    Carbohydrate_by_difference: { type: String },
    Carotene_alpha: { type: String },
    Carotene_beta: { type: String },
    Cholesterol: { type: String },
    Choline_total: { type: String },
    Copper_Cu: { type: String },
    Cryptoxanthin_beta: { type: String },
    Cystine: { type: String },
    Dihydrophylloquinone: { type: String },
    Energy_kJ: { type: String },
    Energy_kcal: { type: String },
    Fatty_acids_total_monounsaturated: { type: String },
    Fatty_acids_total_polyunsaturated: { type: String },
    Fatty_acids_total_saturated: { type: String },
    Fiber_total_dietary: { type: String },
    Fluoride_F: { type: String },
    Folate_DFE: { type: String },
    Fructose: { type: String },
    Glucose_dextrose: { type: String },
    Glutamic_acid: { type: String },
    Iron_Fe: { type: String },
    Isoleucine: { type: String },
    Lactose: { type: String },
    Leucine: { type: String },
    Lycopene: { type: String },
    Magnesium_Mg: { type: String },
    Manganese_Mn: { type: String },
    Niacin: { type: String },
    Pantothenic_acid: { type: String },
    Phosphorus_P: { type: String },
    Potassium_K: { type: String },
    Protein: { type: String },
    Riboflavin: { type: String },
    Selenium_Se: { type: String },
    Sodium_Na: { type: String },
    Starch: { type: String },
    Sugars_total: { type: String },
    Thiamin: { type: String },
    Vitamin_A_IU: { type: String },
    Vitamin_A_RAE: { type: String },
    Vitamin_C_total_ascorbic_acid: { type: String },
    Vitamin_E_alpha_tocopherol: { type: String },
    Vitamin_K_phylloquinone: { type: String },
    Water: { type: String },
    Zinc_Zn: { type: String },
    Processes: { type: String },
    Calories: { type: String },
    total_time: { type: String },
    Continent: { type: String },
    Region: { type: String },
    Sub_region: { type: String }
},{ collection: 'RecipeDB_micronutrients_v1' });

module.exports = mongoose.model('Micronutrient', micronutrientSchema);
