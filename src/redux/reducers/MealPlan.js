import * as actions from '../actionTypes'

const MealPlan = (state = [], action) => {
    switch (action.type) {
        case actions.SELECT_RECIPE:
            return [...state, action.payload.recipe]
        case actions.UNSELECT_RECIPE:
            return state.filter(dish => dish.id !== action.payload.id)
        default:
            return state
    }
}

export default MealPlan