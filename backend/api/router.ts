import { Router } from 'express';
import IngredientController from './ingredientController';
import RecipeController from './recipeController';

const express = require('express')
const router:Router = express.Router();

router.route('/ingredients')
    .get(IngredientController.apiGetIngredients)
    .post(IngredientController.apiAddIngredient)

router.route('/ingredients/:id')
    .get(IngredientController.apiGetIngredientById)
    .delete(IngredientController.apiDeleteIngredientById)
    .put(IngredientController.apiUpdateIngredientById)

router.route('/recipeHeaders')
    .get(RecipeController.apiGetRecipeHeaders)

router.route('/recipes/:id')
    .get(RecipeController.apiGetRecipeById)
    .put(RecipeController.apiUpdateRecipeById)
    .delete(RecipeController.apiDeleteRecipeById)

export default router;