import { Ingredient } from "../../common/sharedtypes/Ingredient";
import { IngredientProperties } from "../../common/sharedtypes/IngredientProperties";
import IngredientsDataSource from "./IngredientsDataSource";

let dataSource:IngredientsDataSource

export default class IngredientsDataAccess {
    static InjectDataSource(data:IngredientsDataSource) {
        dataSource = data;
    }

    static async getIngredients(): Promise<Ingredient[]> {
        return await dataSource.getIngredients();
    }

    static async getIngredientById(id: number): Promise<Ingredient> {
        return await dataSource.getIngredientById(id)
    }

    static async deleteIngredientById(id: number): Promise<boolean> {
        return await dataSource.deleteIngredientById(id)
    }

    static async addIngredient(ingredient: IngredientProperties): Promise<Ingredient> {
        return await dataSource.addIngredient(ingredient);
    }

    static async updateIngredientById(id: number, ingredient: IngredientProperties): Promise<Ingredient> {
        return await dataSource.updateIngredientById(id, ingredient)
    }
}