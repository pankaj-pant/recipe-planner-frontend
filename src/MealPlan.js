import React from 'react';
import {connect} from 'react-redux'

const MealPlan = ({mealPlan, dish}) => {
    return(
        <div>
            <h2>Meal Plan!</h2>
            <button>Generate Shopping List</button>
            <p>Here is your meal plan for next week:</p>
            {mealPlan.map(dish => <p key={dish.id}>{dish.dish}</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mealPlan: state.MealPlan,
        dish: state.Dish
    }
}

export default connect(mapStateToProps)(MealPlan)