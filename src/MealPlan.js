import React from 'react';
import {connect} from 'react-redux'

const MealPlan = ({recipes}) => {
    const mealPlan = recipes.filter(item => item.liked === true)
    const handleClick = () => {
        console.log("Generate shopping list clicked")
    }
    return(
        <div>
            <h2>Meal Plan!</h2>
            <button onClick={handleClick}>Generate Shopping List</button>
            <p>Here is your meal plan for next week:</p>
            {mealPlan.map(dish => <p key={dish.id}>{dish.dish}</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        recipes: state.Recipes
    }
}

export default connect(mapStateToProps)(MealPlan)