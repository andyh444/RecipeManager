import React from 'react';
import { Ingredient } from '../../../../common/sharedtypes/Ingredient';

export interface IIngredientControlProps {
    ingredient: Ingredient
    onDeleteIngredient: (id: number) => void;
}

export function IngredientControl (props: IIngredientControlProps) {
  return (
    <div>
      <p>
        <span>
          Name: {props.ingredient.properties.name},
          Unit: {props.ingredient.properties.unit},
          Shelf life (days): {props.ingredient.properties.shelfLifeDays}
        </span>
        <span>
            <button onClick={() => props.onDeleteIngredient(props.ingredient.id)}>X</button>
        </span>
      </p>
    </div>
  );
}
