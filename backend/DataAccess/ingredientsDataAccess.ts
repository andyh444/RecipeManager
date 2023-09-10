import { Ingredient } from "../../common/sharedtypes/Ingredient";
import { IngredientProperties } from "../../common/sharedtypes/IngredientProperties";
import IngredientsDataSource from "./IngredientsDataSource"

let dataSource:IngredientsDataSource

export default class IngredientsDataAccess {
    static InjectDataSource(data:IngredientsDataSource) {
        dataSource = data;
    }

    static async getIngredients(): Promise<Ingredient[]> {
        return await dataSource.getIngredients();
    }

    static async deleteIngredientById(id: number): Promise<boolean> {
        return await dataSource.deleteIngredientById(id)
    }

    static async addIngredient(ingredient: IngredientProperties): Promise<Ingredient> {
        return await dataSource.addIngredient(ingredient);
    }
}