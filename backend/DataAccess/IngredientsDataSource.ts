import { Ingredient } from "../../common/sharedtypes/Ingredient";
import { IngredientProperties } from "../../common/sharedtypes/IngredientProperties";

export default interface IngredientsDataSource {
    getIngredientById(id: number): Promise<Ingredient>;
    updateIngredientById(id: number, ingredient: IngredientProperties): Promise<Ingredient>;
    getIngredients: () => Promise<Ingredient[]>
    deleteIngredientById: (id: number) => Promise<boolean>
    addIngredient: (ingredient: IngredientProperties) => Promise<Ingredient>
}

