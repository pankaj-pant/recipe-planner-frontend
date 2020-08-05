import * as actions from '../actionTypes'
const initialState = [{
    "id": 1, "dish": "Salmon Soup", 
    "ingredients": [{"id": 1, "item": "Salmon 250g"}, {"id": 2, "item": "Potato"}]
 }, {
    "id": 2, "dish": "Salmon Pasta", 
    "ingredients": [{"id": 3, "item": "Warm Smoked Salmon 300g"}, {"id": 4, "item": "Pasta"}]
 }, {
    "id": 3, "dish": "Butter Chicken", 
    "ingredients": [{"id": 5, "item": "Chicken Breast 600g"}, {"id": 6, "item": "Butter"}]
 }, {
    "id": 4, "dish": "Spinach Soup", 
    "ingredients": [{"id": 7, "item": "Frozen Spinach 300g"}, {"id": 8, "item": "Milk"}]
 }
]

const Dish = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_DISH:
            return [...state, action.payload.dish]
        default:
            return state
    }
}

export default Dish