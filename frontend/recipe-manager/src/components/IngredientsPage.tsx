import React, { useRef } from 'react';
import { Ingredient } from '../../../../common/sharedtypes/Ingredient';
import { IngredientControl } from './IngredientControl';

interface IngredientsPageProps {
    ingredients: Ingredient[];
    onDeleteIngredient: (id: number) => void;
    onAddIngredient: (ingredient: Ingredient) => void;
}

const IngredientsPage: React.FC<IngredientsPageProps> = (props) => {
  // Add your component logic here
  const ingredientEntryRef = useRef<HTMLInputElement>(null);

  const addIngredient = () => {
    const ingredient = { id: props.ingredients.length + 1, name: ingredientEntryRef.current?.value ?? ""};
    console.log("adding ingredient", ingredient);
    props.onAddIngredient(ingredient);
  }

  return  (
    <div>
        <h1>Ingredients</h1>
        <span>
            <input ref={ingredientEntryRef} placeholder='Enter an ingredient'></input>
            <button onClick={addIngredient}>Add</button>
        </span>
            {props.ingredients.map((ingredient) => (
            <IngredientControl key={ingredient.id} ingredient={ingredient} onDeleteIngredient={props.onDeleteIngredient} />
            ))}
    </div>
  );
};

export default IngredientsPage;