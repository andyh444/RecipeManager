import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientsPage from './components/IngredientsPage';
import { Ingredient } from '../../../common/sharedtypes/Ingredient';
import { IngredientProperties } from '../../../common/sharedtypes/IngredientProperties';
import { Recipe, RecipeHeader } from '../../../common/sharedtypes/Recipe';
import RecipesPage from './components/RecipesPage';
import { Link, BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import RecipePage from './components/RecipePage';

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipeHeaders, setRecipeHeaders] = useState<RecipeHeader[]>([])
  const serverUrl = 'http://localhost:3001/'

  
  useEffect(() =>
  {
    getIngredients();
    getRecipeHeaders();
  }, []);

  async function callApi(endpoint:string, requestInit:RequestInit):Promise<any> {
    try {
      const apiUrl = serverUrl + endpoint;
      const response = await fetch(apiUrl, requestInit);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error', error);
      return null;
    }
  }

  async function getRecipeHeaders() {
    const data = await callApi('api/recipeHeaders/', { method: 'GET' });
    if (data !== null) {
      setRecipeHeaders(data);
    }
  }

  async function getIngredients() {
    const data = await callApi('api/ingredients/', { method: 'GET' });
    if (data !== null) {
      setIngredients(data);
    }
  }

  const handleDeleteIngredient = async (id: number) => {
    const data = await callApi(`api/ingredients/${id}`, { method: 'DELETE' });
    if (data !== null) {
      console.log('Deleted Ingredient:', data);
      getIngredients();
    }
  };

  const handleAddIngredient = async (ingredient: IngredientProperties) => {
    const data = await callApi('api/ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ingredient),
    });
    if (data !== null) {
      getIngredients();
    }
  }

  const handleUpdateIngredient = async(id:number, ingredient:IngredientProperties) => {
    const data = await callApi(`api/ingredients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ingredient),
    });
    if (data !== null) {
      getIngredients();
    }
  }

  const getRecipe = async(id:number):Promise<Recipe> => {
    const data = await callApi(`api/recipes/${id}`, { method: 'GET'});
    return data;
  }

  return (
    <div className="App">
      <span>
        <Link className="headerButton" to="/ingredients">Ingredients</Link>
        <Link className="headerButton" to="/recipes">Recipes</Link>
      </span>
      
      <Routes>
        <Route path='/ingredients' element={
          <IngredientsPage ingredients={ingredients}
            onDeleteIngredient={handleDeleteIngredient}
            onAddIngredient={handleAddIngredient}
            onUpdateIngredient={handleUpdateIngredient}
          />
        }
        />
        <Route path='/recipes' element={
          <RecipesPage recipeHeaders={recipeHeaders} />
        }
        />
        <Route path='/recipes/:id' element={
          <RecipePage getRecipe={getRecipe} />
        } />
      </Routes>
    </div>
  );
}

export default App;
