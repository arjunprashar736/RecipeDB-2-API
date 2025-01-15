const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
dotenv.config();
const Recipe=require('./src/models/recipe');
const indexRoutes = require("./src/routes/indexRoutes");
const verifyApiKey=require("./src/middleware/apikeymiddleware");
const recipeTimeRoutes = require("./src/routes/recipebytimeRoutes");
const recipeRoutes = require("./src/routes/recipeRoutes");
const nutritionRoutes = require('./src/routes/nutritionRoutes');
const micronutrientsRoutes = require('./src/routes/micronutrientsRoutes');
const recipebynameRoutes=require('./src/routes/recipebynameRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(verifyApiKey);


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.error('error in connecting to MongoDB', err);
});


app.use('/', indexRoutes);
app.use('/recipe',recipeRoutes);
app.use('/recipe-nutri',nutritionRoutes)
app.use('/recipe-micronutri',micronutrientsRoutes);

app.use('/api/recipes', recipeTimeRoutes);
app.use('/recipe-bytitle',recipebynameRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });