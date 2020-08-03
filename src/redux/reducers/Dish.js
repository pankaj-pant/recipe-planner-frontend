import * as actions from '../actionTypes'
const initialState = [{
    "id": 1, "dish": "Salmon Soup", 
    "ingredients": [{"id": 1, "item": "Salmon 250g"}, {"id": 2, "item": "Potato"}]
 }, {
    "id": 2, "dish": "Salmon Pasta", 
    "ingredients": [{"id": 3, "item": "Warm Smoked Salmon 300g"}, {"id": 4, "item": "Pasta"}]
 }]

const Dish = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_DISH:
            return [...state, action.payload.dish]
        default:
            return state
    }
}

export default Dish