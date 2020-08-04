import React, {useState} from 'react';
import Recipe from './Recipe'
import {connect} from 'react-redux'
import './Recipes.css'

const Recipes = ({dish}) => {
    const [items, setItems] = useState([])
    const addToList = (ingredients) => {
        console.log("Add Ingredients to Shopping List button clicked")
        console.log(ingredients)
        const updatedItems = items.concat(ingredients)
        setItems(updatedItems)
        
    }

    console.log("State", dish)
    return(
        <div className="recipes">
            <p>List of all Recipes</p>
            {dish.map(recipe => <Recipe key={recipe.id} name={recipe.dish} ingredients={recipe.ingredients} addToList={addToList}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {dish: state.Dish}
}

export default connect(mapStateToProps)(Recipes)