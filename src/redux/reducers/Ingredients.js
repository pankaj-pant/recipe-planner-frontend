import * as actions from '../actionTypes'

const Ingredients = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_INGREDIENT:
            return [...state, ...action.payload.ingredients]
        case actions.REMOVE_INGREDIENT:
            return state.filter(item => item.id !== action.payload.id)
        case actions.GENERATE_SHOPPING_LIST:
            let ingredients = action.payload.mealPlan.map(dish => dish.ingredients)
            ingredients = ingredients.flat()
            return [...ingredients]
        default:
            return state
    }
}

export default Ingredients
