import { RecipeHeader } from "../../common/sharedtypes/Recipe";
import { Recipe } from "../../common/sharedtypes/Recipe"

export default interface RecipesDataSource {
    getRecipeById(id: string): Promise<Recipe>;
    getRecipeHeaders: () => Promise<RecipeHeader[]>;
}
