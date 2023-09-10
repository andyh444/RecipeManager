import { Router } from 'express';
import IngredientController from './ingredientController';

const express = require('express')
const router:Router = express.Router();

router.route('/ingredients').get(IngredientController.apiGetIngredients);
router.route('/deleteingredient/:id').delete(IngredientController.apiDeleteIngredientById);
router.route('/updateingredient/:id').put(IngredientController.apiUpdateIngredientById);
router.route('/addingredient').post(IngredientController.apiAddIngredient);

export default router;