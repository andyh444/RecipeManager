import { Ingredient } from "../../common/sharedtypes/Ingredient";
import { IngredientProperties } from "../../common/sharedtypes/IngredientProperties";
import IngredientsDataSource from "./IngredientsDataSource";

let ingredientIndex = 0;
let ingredients:Ingredient[] = [
    { id: ingredientIndex++, properties: { name: 'Egg', unit: 'single', shelfLifeDays: 365 } },
    { id: ingredientIndex++, properties: { name: 'Ham', unit: 'gram', shelfLifeDays: 7 } },
    { id: ingredientIndex++, properties: { name: 'Chips', unit: 'gram', shelfLifeDays: 365 } },
]
let DummyDataSource:IngredientsDataSource = {
    getIngredients: (): Promise<Ingredient[]> => {
        return Promise.resolve(ingredients);
    },
    deleteIngredientById: (id: number): Promise<boolean> => {
        const index:number = ingredients.findIndex((ingredient) => ingredient.id === id);
        let deletedIngredient:Ingredient | null;
        if (index === -1) {
            deletedIngredient = null;
        } else {
          deletedIngredient = ingredients.splice(index, 1)[0];
        }
        return Promise.resolve(deletedIngredient !== null);
    },
    addIngredient: (ingredient: IngredientProperties): Promise<Ingredient> => {
        const newIngredient:Ingredient = { id: ingredientIndex++, properties: ingredient }
        ingredients.push(newIngredient);
        return Promise.resolve(newIngredient);
    }
}

export default DummyDataSource;