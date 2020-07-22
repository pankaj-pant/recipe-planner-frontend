import React from 'react';
import Recipe from './Recipe'
import db from './Recipes.json'
import ShoppingList from './ShoppingList'

const Recipes = () => {
    return(
        <div>
            <p>List of all Recipes</p>
            {db.recipes.map(recipe => <Recipe key={recipe.id} name={recipe.dish} ingredients={recipe.ingredients}/>)}
            <ShoppingList />
        </div>
    )
}

export default Recipes