import React from 'react';
import {connect} from 'react-redux'

const MealPlan = ({mealPlan}) => {
    return(
        <div>
            <h2>Meal Plan!</h2>
            <button>Generate Shopping List</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mealPlan: state.MealPlan
    }
}

export default connect(mapStateToProps)(MealPlan)