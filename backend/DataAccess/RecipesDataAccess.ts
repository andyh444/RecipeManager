import { Recipe } from "../../common/sharedtypes/Recipe";
import RecipesDataSource from "./RecipesDataSource";

let dataSource:RecipesDataSource

export default class RecipesDataAccess {
    static InjectDataSource(data:RecipesDataSource) {
        dataSource = data
    }
   
    static updateRecipeById(id: string, body: any): any {
        throw new Error("Method not implemented.");
    }

    static async getRecipeById(id: number): Promise<Recipe> {
        return await dataSource.getRecipeById(id);
    }

    static async getRecipeHeaders() {
        return await dataSource.getRecipeHeaders();
    }
}