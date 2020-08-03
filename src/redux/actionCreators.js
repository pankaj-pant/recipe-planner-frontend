import * as actions from './actionTypes'

export const selectDish = (dish) => ({
    type: actions.SELECT_DISH,
    payload: {
        dish: dish
    }
})

export const addIngredient = (ingredients) => ({
    type: actions.ADD_INGREDIENT,
    payload: {
        ingredients: ingredients
    }
})

export const deleteIngredient = (id) => ({
    type: actions.REMOVE_INGREDIENT,
    payload: {
        id: id
    }
})