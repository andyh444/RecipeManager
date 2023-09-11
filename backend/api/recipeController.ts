import DummyRecipesDataSource from "../DataAccess/DummyRecipesDataSource";
import RecipesDataAccess from "../DataAccess/RecipesDataAccess";
import { Request, Response } from 'express';

RecipesDataAccess.InjectDataSource(DummyRecipesDataSource);

export default class RecipeController {
    static async apiGetRecipeById(req : Request, res: Response) {
        res.json(await RecipesDataAccess.getRecipeById(req.params.id));
    }

    static async apiUpdateRecipeById(req : Request, res: Response) {
        res.json(await RecipesDataAccess.updateRecipeById(req.params.id, req.body))
    }

    static async apiDeleteRecipeById(req : Request, res: Response) {
        throw new Error('Method not implemented.');
    }

    static async apiGetRecipeHeaders(req : Request, res: Response) {
       res.json(await RecipesDataAccess.getRecipeHeaders());
    }
}