import React from 'react';
import Recipes from './Recipes'
import Ingredients from './Ingredients'
import ShoppingList from './ShoppingList'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>What do you feel like eating today?</h2>
      <Recipes />
      <Ingredients />
      <ShoppingList />

    </div>
  );
}

export default App;
