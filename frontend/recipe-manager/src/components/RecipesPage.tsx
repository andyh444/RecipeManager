import React from 'react'
import { RecipeHeader } from '../../../../common/sharedtypes/Recipe';
import { Link } from 'react-router-dom';

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
                    <p><Link to={`/recipes/${recipe.id}`} key={recipe.id}>{recipe.name}</Link></p>
                ))
            }
        </div>
    )
}

export default RecipesPage;