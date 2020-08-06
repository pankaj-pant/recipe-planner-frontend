import * as actions from '../actionTypes'

const MealPlan = (state = [], action) => {
    switch (action) {
        case actions.SELECT_DISH:
            console.log("Select dish")
            return [...state, action.payload.id]
        case actions.UNSELECT_DISH:
            return state.filter(dish => dish !== action.payload.id)
        default:
            return state
    }
}

export default MealPlan