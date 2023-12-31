import React from 'react'
import { RecipeHeader } from '../../../../common/sharedtypes/Recipe';
import { Link } from 'react-router-dom';

interface RecipesPageProps {
    recipeHeaders: RecipeHeader[]
}

const RecipesPage: React.FC<RecipesPageProps> = (props) => {
    console.log("Recipes:", props.recipeHeaders);
    return (
        <React.Fragment>
            <h1>Recipes</h1>
            {
                props.recipeHeaders.map((recipe, index) => (
                    <p key={index}><Link to={`/recipes/${recipe.id}`} key={recipe.id}>{recipe.name}</Link></p>
                ))
            }
        </React.Fragment>
    )
}

export default RecipesPage;