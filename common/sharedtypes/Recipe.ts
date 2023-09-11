import { RecipeIngredientEntry } from "./RecipeIngredientEntry";

export interface RecipeProperties {
    name:string
    contents:RecipeIngredientEntry[]
}

export interface Recipe {
    id:number
    properties:RecipeProperties
}

export interface RecipeHeader {
    id:number
    name:string
}