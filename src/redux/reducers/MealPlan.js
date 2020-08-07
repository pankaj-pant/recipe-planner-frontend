import * as actions from '../actionTypes'

const MealPlan = (state = [], action) => {
    switch (action.type) {
        case actions.SELECT_DISH:
            console.log("Select dish")
            return [...state, action.payload.dish]
        case actions.UNSELECT_DISH:
            return state.filter(dish => dish.id !== action.payload.id)
        default:
            return state
    }
}

export default MealPlan