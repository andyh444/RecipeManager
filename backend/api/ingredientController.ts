import { Ingredient } from "../../common/sharedtypes/Ingredient";
import { Request, Response } from 'express';
import { IngredientProperties } from "../../common/sharedtypes/IngredientProperties";
import IngredientsDataAccess from "./../DataAccess/ingredientsDataAccess";
import DummyDataSource from "./../DataAccess/DummyDataSource";

IngredientsDataAccess.InjectDataSource(DummyDataSource);

export default class IngredientController
{
    static async apiUpdateIngredientById(req : Request, res: Response) {
        const id:number = Number(req.params.id)
        const properties:IngredientProperties = req.body
        res.json(await IngredientsDataAccess.updateIngredientById(id, properties));
    }

    static async apiGetIngredients(req : Request, res: Response) {
        res.json(await IngredientsDataAccess.getIngredients());
    }

    static async apiDeleteIngredientById(req : Request, res: Response) {
        const id:number = Number(req.params.id);
        let deleteIngredientResult:boolean = await IngredientsDataAccess.deleteIngredientById(id)
        if (!deleteIngredientResult) {
            res.status(404).json({ message: 'Ingredient not found' });  
        } else {
            res.status(200).json({ message: 'Deleted ingredient' });
        }
    }

    static async apiAddIngredient(req : Request, res: Response) {
        const newIngredientProperties:IngredientProperties = req.body;
        const newIngredient:Ingredient = await IngredientsDataAccess.addIngredient(newIngredientProperties);
        res.status(201).json(newIngredient);
    }
}