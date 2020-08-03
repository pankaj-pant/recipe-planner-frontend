import React, {useState} from 'react';
import Recipe from './Recipe'
import db from './Recipes.json'
import ShoppingList from './ShoppingList'
import {connect} from 'react-redux'

const Recipes = ({dish}) => {
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

    console.log("State", dish)
    return(
        <div style={{border: "1px solid pink"}}>
            <p>List of all Recipes</p>
            {dish.map(recipe => <Recipe key={recipe.id} name={recipe.dish} ingredients={recipe.ingredients} addToList={addToList}/>)}
            <ShoppingList items={items} deleteItem={deleteItem}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {dish: state.Dish}
}

export default connect(mapStateToProps)(Recipes)