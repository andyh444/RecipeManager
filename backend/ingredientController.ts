import { Ingredient } from "../common/sharedtypes/Ingredient";
import { Request, Response } from 'express';
import { IngredientProperties } from "../common/sharedtypes/IngredientProperties";

let ingredientIndex = 0;
let ingredients:Ingredient[] = [
    { id: ingredientIndex++, properties: { name: 'Egg' } },
    { id: ingredientIndex++, properties: { name: 'Ham' } },
    { id: ingredientIndex++, properties: { name: 'Chips' } },
]

export default class IngredientController
{
    static apiGetIngredients(req : Request, res: Response) {
        res.json(ingredients);
    }

    static apiDeleteIngredientById(req : Request, res: Response) {
        const ingredientId:number = Number(req.params.id);
        const index:number = ingredients.findIndex((ingredient) => ingredient.id === ingredientId);
        if (index === -1) {
          res.status(404).json({ error: 'Ingredient not found' });
        } else {
          const deletedIngredient = ingredients.splice(index, 1);
          res.json(deletedIngredient[0]); // Respond with the deleted ingredient
        }
    }

    static apiAddIngredient(req : Request, res: Response) {
        const newIngredientProperties:IngredientProperties = req.body;
        const newIngredient:Ingredient = { id: ingredientIndex++, properties: newIngredientProperties }
        ingredients.push(newIngredient);
        res.status(201).json(newIngredient);
    }
}