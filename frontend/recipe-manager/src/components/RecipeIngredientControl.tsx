import * as React from 'react';
import { Ingredient } from '../../../../common/sharedtypes/Ingredient';
import { RecipeIngredientEntry, RecipeIngredientOption } from '../../../../common/sharedtypes/RecipeIngredientEntry';

export interface IRecipeIngredientControlProps {
    recipeEntry: RecipeIngredientEntry
    ingredients: Ingredient[]|null
}

export function RecipeIngredientControl (props: IRecipeIngredientControlProps) {

  let getShortUnit = (unit:String):String => {
    switch (unit) {
        case "Gram":
            return "g"
        case "Millilitre":
            return "ml"
        default:
            return "";
    }
  };
  const firstOption:RecipeIngredientOption = props.recipeEntry?.options[0];
  let ingredient:Ingredient|null = null;
  if (props?.ingredients !== null) {
    ingredient = props.ingredients[props.ingredients.findIndex(x => x.id == firstOption.ingredientId)];
  }
  
  return (
    <React.Fragment>
      <p>
        {firstOption.amountPerServing} {getShortUnit(ingredient?.properties.unit ?? "")} {ingredient?.properties.name ?? "<Unknown ingredient>"}
      </p>
    </React.Fragment>
  );
}
