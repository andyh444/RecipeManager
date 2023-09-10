import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientsPage from './components/IngredientsPage';
import { Ingredient } from '../../../common/sharedtypes/Ingredient';
import { IngredientProperties } from '../../../common/sharedtypes/IngredientProperties';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const serverUrl = 'http://localhost:3001/'
  useEffect(() =>
  {
    getIngredients();
  }, []);

  async function getIngredients() {
    try {
      const apiUrl = serverUrl + 'api/ingredients/'; // Replace with your API endpoint
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Parse the response body as JSON
      console.log(data); // Handle the data received from the server
      setIngredients(data);
    } catch (error) {
      console.error('Fetch error:', error); // Handle errors
    }
  }

  const handleDeleteIngredient = async (id: number) => {
    // Remove the ingredient with the specified id from the list
    //setIngredients((prevIngredients) => prevIngredients.filter((ingredient) => ingredient.id !== id));
    try {
      const apiUrl = serverUrl + `api/deleteingredient/${id}`; // Replace with your API endpoint
      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const deletedIngredient = await response.json();
      console.log('Deleted Ingredient:', deletedIngredient);
      getIngredients();
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleAddIngredient = async (ingredient: IngredientProperties) => {
    //setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    try {
      const apiUrl = serverUrl + 'api/api/addingredient'; // Replace with your API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const addedIngredient = await response.json();
      console.log('Added Ingredient:', addedIngredient);

      getIngredients();
    } catch (error) {
      console.error('Add error:', error);
    }
  }

  return (
    <div className="App">
      <IngredientsPage ingredients={ingredients}
                       onDeleteIngredient={handleDeleteIngredient}
                       onAddIngredient={handleAddIngredient}
                       onUpdateIngredient={() => {}}
      />
    </div>
  );
}

export default App;
