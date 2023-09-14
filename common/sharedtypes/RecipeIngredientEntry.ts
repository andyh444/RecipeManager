import { Ingredient } from './Ingredient'

export interface RecipeIngredientEntry {
    options:RecipeIngredientOption[]
}

export interface RecipeIngredientOption {
    ingredientId:number
    preferability:number
    amountPerServing:number
}