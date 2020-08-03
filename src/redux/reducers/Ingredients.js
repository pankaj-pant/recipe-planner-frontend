import * as actions from '../actionTypes'

const Ingredients = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_INGREDIENT:
            return [...state, ...action.payload.ingredients]
        case actions.REMOVE_INGREDIENT:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}

export default Ingredients
