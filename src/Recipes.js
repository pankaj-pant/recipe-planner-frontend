import React, {useState} from 'react';
import Recipe from './Recipe'
import db from './Recipes.json'
import ShoppingList from './ShoppingList'

const Recipes = () => {
    const [items, setItems] = useState([])
    const addToList = (ingredients) => {
        console.log("Add Ingredients to Shopping List button clicked")
        console.log(ingredients)
        const updatedItems = items.concat(ingredients)
        setItems(updatedItems)
        
    }
    const deleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id)
        setItems(updatedItems)
    }
    return(
        <div>
            <p>List of all Recipes</p>
            {db.recipes.map(recipe => <Recipe key={recipe.id} name={recipe.dish} ingredients={recipe.ingredients} addToList={addToList}/>)}
            <ShoppingList items={items} deleteItem={deleteItem}/>
        </div>
    )
}

export default Recipes