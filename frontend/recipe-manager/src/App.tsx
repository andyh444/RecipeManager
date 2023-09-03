import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientsPage from './components/IngredientsPage';
import { Ingredient } from './sharedtypes/Ingredient';

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: 'Ingredient 1' },
    { id: 2, name: 'Ingredient 2' },
    { id: 3, name: 'Ingredient 3' },
  ]);

  const handleDeleteIngredient = (id: number) => {
    // Remove the ingredient with the specified id from the list
    setIngredients((prevIngredients) => prevIngredients.filter((ingredient) => ingredient.id !== id));
  };

  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <IngredientsPage ingredients={ingredients} onDeleteIngredient={handleDeleteIngredient} onAddIngredient={handleAddIngredient} />
    </div>
  );
}

export default App;
