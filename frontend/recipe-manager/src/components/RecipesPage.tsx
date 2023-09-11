import React from 'react'
import { RecipeHeader } from '../../../../common/sharedtypes/Recipe';

interface RecipesPageProps {
    recipeHeaders: RecipeHeader[]
}

const RecipesPage: React.FC<RecipesPageProps> = (props) => {
    console.log("Recipes:", props.recipeHeaders);
    return (
        <div>
            <h1>Recipes</h1>
            {
                props.recipeHeaders.map(recipe => (
                    <p key={recipe.id}>{recipe.name}</p>
                ))
            }
        </div>
    )
}

export default RecipesPage;