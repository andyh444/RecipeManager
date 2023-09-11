import { Ingredient } from './Ingredient'

export interface RecipeIngredientEntry {
    options:RecipeIngredientOption[]
}

export interface RecipeIngredientOption {
    ingredient:Ingredient
    preferability:number
    amountPerServing:number
}