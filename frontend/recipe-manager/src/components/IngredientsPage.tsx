import React, { useRef } from 'react';
import Select from 'react-select';
import { Ingredient } from '../../../../common/sharedtypes/Ingredient';
import { IngredientControl } from './IngredientControl';
import { IngredientProperties } from '../../../../common/sharedtypes/IngredientProperties';

interface IngredientsPageProps {
    ingredients: Ingredient[];
    onDeleteIngredient: (id: number) => void;
    onAddIngredient: (ingredient: IngredientProperties) => void;
}

const IngredientsPage: React.FC<IngredientsPageProps> = (props) => {
  const ingredientEntryRef = useRef<HTMLInputElement>(null);
  const shelfLifeRef = useRef<HTMLInputElement>(null);
  const unitRef = useRef<HTMLInputElement>(null);

  const addIngredient = () => {
    const ingredientProperties:IngredientProperties = {
      name: ingredientEntryRef.current?.value ?? "",
      unit: unitRef.current?.value ?? "",
      shelfLifeDays: Number(shelfLifeRef.current?.value ?? 1)
    };
    console.log("adding ingredient", ingredientProperties);
    props.onAddIngredient(ingredientProperties);
  }

  return  (
    <div>
        <h1>Ingredients</h1>
        <span>
            <input ref={ingredientEntryRef} placeholder='Enter an ingredient'></input>
            <input ref={shelfLifeRef} type='number' min={ 1 } placeholder='Enter a shelf life (Days)'></input>
            <input ref={unitRef} placeholder='Enter a unit (gram, millilitre, single)'></input>
            <button onClick={addIngredient}>Add</button>
        </span>
            {props.ingredients.map((ingredient) => (
            <IngredientControl key={ingredient.id} ingredient={ingredient} onDeleteIngredient={props.onDeleteIngredient} />
            ))}
    </div>
  );
};

export default IngredientsPage;