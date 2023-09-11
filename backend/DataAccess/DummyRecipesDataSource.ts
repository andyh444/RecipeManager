import { Recipe, RecipeHeader } from "../../common/sharedtypes/Recipe";
import RecipesDataSource from "./RecipesDataSource";

let recipeIndex = 0;
let recipes:Recipe[] = [
    { id:recipeIndex++, properties:{name:"Ham, Egg 'n' chips", contents:[]} },
    { id:recipeIndex++, properties:{name:"Spaghetti Carbonara", contents:[]} }
]

let DummyRecipesDataSource:RecipesDataSource = {
    getRecipeHeaders: function (): Promise<RecipeHeader[]> {
        const headers:RecipeHeader[] = recipes.map(x => {
            return { id: x.id, name: x.properties.name };
        });
        return Promise.resolve(headers);
    },
    getRecipeById: function (id: string): Promise<Recipe> {
        throw new Error("Function not implemented.");
    }
}

export default DummyRecipesDataSource;