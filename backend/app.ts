import { Request, Response } from 'express';
import { Ingredient } from '../common/sharedtypes/Ingredient';

var express = require('express')
var cors = require('cors')
const app = express();
const port = 3001; // Set the port for your server

let ingredients:Ingredient[] = [
    { id: 1, name: 'Egg' },
    { id: 2, name: 'Ham' },
    { id: 3, name: 'Chips' },
]

app.use(cors());
app.use(express.json());


app.get('/api/ingredients', (req: Request, res: Response) => {
    console.log("ingredients:", ingredients)
    res.json(ingredients);
  });

app.delete('/api/deleteingredient/:id', (req: Request, res: Response) => {
  const ingredientId = Number(req.params.id);
  const index = ingredients.findIndex((ingredient) => ingredient.id === ingredientId);

  if (index === -1) {
    res.status(404).json({ error: 'Ingredient not found' });
  } else {
    const deletedIngredient = ingredients.splice(index, 1);
    res.json(deletedIngredient[0]); // Respond with the deleted ingredient
  }
});

app.post('/api/addingredient', (req: Request, res: Response) => {
    const newIngredient: Ingredient = req.body;
    ingredients.push(newIngredient);
    res.status(201).json(newIngredient);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
