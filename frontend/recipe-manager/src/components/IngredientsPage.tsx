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
    <React.Fragment>
        <h1>Ingredients</h1>
        <IngredientEditor initialProperties={null} buttonText='Add' onFinish={i => props.onAddIngredient(i)} />
        {props.ingredients.map((ingredient) => (
          <div key={ingredient.id}>
            <IngredientControl ingredient={ingredient}
                               onDeleteIngredient={props.onDeleteIngredient}
                               onEditIngredient={editIngredient}
            />
            {
              ingredient.id === editIndex
              && <IngredientEditor buttonText='Update'
                                   initialProperties={ingredient.properties}
                                   onFinish={i => {
                                    props.onUpdateIngredient(ingredient.id, i)
                                    setEditIndex(-1)
              }}/>
            }
        </div>
        ))}
    </React.Fragment>
  );
};

export default IngredientsPage;