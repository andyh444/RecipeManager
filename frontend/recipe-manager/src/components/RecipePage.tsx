import React, { useState } from 'react'
import { Recipe, RecipeHeader } from '../../../../common/sharedtypes/Recipe';
import { Link, useParams } from 'react-router-dom';

interface RecipePageProps {
    getRecipe: (id: number) => Promise<Recipe>;
}

const RecipePage: React.FC<RecipePageProps> = (props) => {
    let { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe|null>(null);
    props.getRecipe(Number(id))
        .then(d => setRecipe(d));
    return (
        <React.Fragment>
            <h2>{recipe?.properties.name}</h2>
            {
            recipe?.properties.contents.map((ingredientEntry, i) => (
                    <p key={i}>{ingredientEntry.options[0].ingredientId}</p>
                ))
            }
        </React.Fragment>
    )
}

export default RecipePage;