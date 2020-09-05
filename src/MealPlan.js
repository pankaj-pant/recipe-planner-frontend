import React from 'react';
import {connect} from 'react-redux'
import {generateShoppingList} from './redux/actionCreators'
import {Link} from 'react-router-dom'

const MealPlan = ({recipes, generateShoppingList}) => {

    const mealPlan = recipes.filter(item => item.liked === true)
    console.log("Mealplan", mealPlan)
    const handleClick = () => {
        console.log("Generate shopping list clicked")
        generateShoppingList(mealPlan)
    }
    return(
        <div>
            <h2>Meal Plan!</h2>
            <Link to="/shoppingList">
                <button onClick={handleClick}>Generate Shopping List</button>
            </Link>
            <p>Here is your meal plan for next week:</p>
            {mealPlan.map(dish => <p key={dish.id}>{dish.dish}</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipes: state.Recipes
    }
}

const mapDispatchToProps = {generateShoppingList}

export default connect(mapStateToProps, mapDispatchToProps)(MealPlan)