import { Recipe, RecipeHeader } from "../../common/sharedtypes/Recipe";
import RecipesDataSource from "./RecipesDataSource";

let recipeIndex = 0;
let recipes:Recipe[] = [
    {
        id:recipeIndex++,
        properties:{
            name:"Ham, Egg 'n' chips",
            contents:[
                {
                    options: [
                        {
                            ingredientId: 0, // Egg
                            preferability: 0,
                            amountPerServing: 1
                        }]
                },
                {
                    options: [
                        {
                            ingredientId: 1, // Ham
                            preferability: 0,
                            amountPerServing: 200
                        }]
                },
                {
                    options: [
                        {
                            ingredientId: 2, // Chips
                            preferability: 0,
                            amountPerServing: 125
                        }]
                }
            ]
        }
    },
    {
        id:recipeIndex++,
        properties:{
            name:"Spaghetti Carbonara",
            contents:[]
        }
    }
]

let DummyRecipesDataSource:RecipesDataSource = {
    getRecipeHeaders: function (): Promise<RecipeHeader[]> {
        const headers:RecipeHeader[] = recipes.map(x => {
            return { id: x.id, name: x.properties.name };
        });
        return Promise.resolve(headers);
    },
    getRecipeById: function (id: number): Promise<Recipe> {
        return Promise.resolve(recipes[recipes.findIndex((recipe) => recipe.id === id)]);
    }
}

export default DummyRecipesDataSource;