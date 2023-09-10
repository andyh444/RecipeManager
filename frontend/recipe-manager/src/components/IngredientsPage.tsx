import React, { useRef, useState } from 'react';
import Select from 'react-select';
import { Ingredient } from '../../../../common/sharedtypes/Ingredient';
import { IngredientControl } from './IngredientControl';
import { IngredientProperties } from '../../../../common/sharedtypes/IngredientProperties';
import { IngredientEditor } from './IngredientEditor';

interface IngredientsPageProps {
    ingredients: Ingredient[];
    onDeleteIngredient: (id: number) => void;
    onAddIngredient: (ingredient: IngredientProperties) => void;
    onUpdateIngredient: (id: number, ingredient: IngredientProperties) => void;
}

const IngredientsPage: React.FC<IngredientsPageProps> = (props) => {
  const ingredientEntryRef = useRef<HTMLInputElement>(null);
  const shelfLifeRef = useRef<HTMLInputElement>(null);
  const unitRef = useRef<HTMLInputElement>(null);
  const [editIndex, setEditIndex] = useState<number>(-1);

  const editIngredient = (id: number) => {
    setEditIndex(id);
  };

  return  (
    <div>
        <h1>Ingredients</h1>
        <IngredientEditor onFinish={i => props.onAddIngredient(i)} />
        {props.ingredients.map((ingredient) => (
          <div>
            <IngredientControl key={ingredient.id}
                              ingredient={ingredient}
                              onDeleteIngredient={props.onDeleteIngredient}
                              onEditIngredient={editIngredient}
            />
            {
              ingredient.id === editIndex
              && <IngredientEditor onFinish={i => {
                setEditIndex(-1)
                props.onUpdateIngredient(ingredient.id, i)
              }}/>
            }
        </div>
        ))}
    </div>
  );
};

export default IngredientsPage;