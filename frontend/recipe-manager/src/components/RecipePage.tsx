import React, { useEffect, useState } from 'react'
import { Recipe, RecipeHeader } from '../../../../common/sharedtypes/Recipe';
import { Link, useParams } from 'react-router-dom';
import { Ingredient } from '../../../../common/sharedtypes/Ingredient';
import { RecipeIngredientEntry } from '../../../../common/sharedtypes/RecipeIngredientEntry';
import { RecipeIngredientControl } from './RecipeIngredientControl';

interface RecipePageProps {
    getRecipe: (id: number) => Promise<Recipe>;
    getIngredient: (id: number) => Promise<Ingredient>;
}

interface RecipeIngredient {
    recipeIngredientEntry: RecipeIngredientEntry,
    ingredients: Ingredient[]
}

const RecipePage: React.FC<RecipePageProps> = (props) => {
    let { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe|null>(null);
    const [ingredients, setIngredients] = useState<Ingredient[]|null>([]);

    useEffect(() =>
    {
        props.getRecipe(Number(id))
            .then(d => {
                setRecipe(d)
                console.log("recipes", d);
                return d;
            })
            .then(d => {
                let ingredientPromises: Promise<Ingredient>[] = d.properties.contents.map(i => {
                    return props.getIngredient(i.options[0].ingredientId)
                })
                Promise.all(ingredientPromises)
                    .then(i => setIngredients(i))
            });
    }, []);

    
    return (
        <React.Fragment>
            <h2>{recipe?.properties.name}</h2>
            <h3>Ingredients</h3>
            {
                recipe?.properties.contents.map((x, i) => (
                    <RecipeIngredientControl recipeEntry={x} ingredients={ingredients} />
                ))
            }
            <br/>
            <h3>Method</h3>
            <p>1. Assemble the ingredients</p>
            <p>2. Cook</p>
        </React.Fragment>
    )
}

export default RecipePage;