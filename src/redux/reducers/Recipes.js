import * as actions from '../actionTypes'
const initialState = [{
    "id": 1, "dish": "Salmon Soup", 
    "ingredients": [{"id": 1, "item": "Salmon 250g"}, {"id": 2, "item": "Potato"}],
    "liked": false
 }, {
    "id": 2, "dish": "Salmon Pasta", 
    "ingredients": [{"id": 3, "item": "Warm Smoked Salmon 300g"}, {"id": 4, "item": "Pasta"}],
    "liked": false
 }, {
    "id": 3, "dish": "Butter Chicken", 
    "ingredients": [{"id": 5, "item": "Chicken Breast 600g"}, {"id": 6, "item": "Butter"}],
    "liked": false
 }, {
    "id": 4, "dish": "Spinach Soup", 
    "ingredients": [{"id": 7, "item": "Frozen Spinach 300g"}, {"id": 8, "item": "Milk"}],
    "liked": false
 }
]

const Recipes = (state = initialState, action) => {
    switch (action.type) {
        case actions.CREATE_RECIPE:
            return [...state, action.payload.recipe]
        case actions.TOGGLE_HEART_RECIPE:
            return state.map(recipe => recipe.id === action.payload.id ? {...recipe, "liked": !recipe.liked} : recipe)
        default:
            return state
    }
}

export default Recipes