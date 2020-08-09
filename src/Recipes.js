import React, {useState} from 'react';
import Recipe from './Recipe'
import {connect} from 'react-redux'
import './Recipes.css'

const Recipes = ({recipes}) => {
    const [items, setItems] = useState([])
    const addToList = (ingredients) => {
        console.log("Add Ingredients to Shopping List button clicked")
        console.log(ingredients)
        const updatedItems = items.concat(ingredients)
        setItems(updatedItems)
        
    }

    console.log("Recipes State", recipes)
    return(
        <div>
            <h2>List of all Recipes</h2>
            <button>Add New Recipe</button>
            <div className="recipes">
                {recipes.map(recipe => <Recipe key={recipe.id} name={recipe.dish} id={recipe.id} recipe={recipe}/>)}
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {recipes: state.Recipes}
}

export default connect(mapStateToProps)(Recipes)