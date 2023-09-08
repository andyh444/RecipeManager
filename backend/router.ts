import { Request, Response, Router } from 'express';
import { Ingredient } from '../common/sharedtypes/Ingredient';

let ingredients:Ingredient[] = [
    { id: 1, name: 'Egg' },
    { id: 2, name: 'Ham' },
    { id: 3, name: 'Chips' },
]

const express = require('express')
const router:Router = express.Router();

router.route('/ingredients').get((req: Request, res: Response) => {
  console.log("ingredients:", ingredients)
  res.json(ingredients)
});

router.route('/deleteingredient/:id').delete((req: Request, res: Response) => {
  const ingredientId = Number(req.params.id);
  const index = ingredients.findIndex((ingredient) => ingredient.id === ingredientId);

  if (index === -1) {
    res.status(404).json({ error: 'Ingredient not found' });
  } else {
    const deletedIngredient = ingredients.splice(index, 1);
    res.json(deletedIngredient[0]); // Respond with the deleted ingredient
  }
});

router.route('/addingredient').post((req: Request, res: Response) => {
  const newIngredient: Ingredient = req.body;
  ingredients.push(newIngredient);
  res.status(201).json(newIngredient);
});

export default router;