import * as actions from './actionTypes'

export const createRecipe = (recipe) => ({
    type: actions.CREATE_RECIPE,
    payload:  {
        recipe: recipe
    }
})

export const toggleHeartRecipe = (id) => ({
    type: actions.TOGGLE_HEART_RECIPE,
    payload: {
        id: id
    }
})


export const selectRecipe = (recipe) => ({
    type: actions.SELECT_RECIPE,
    payload: {
        recipe: recipe
    }
})

export const unselectRecipe = (id) => ({
    type: actions.UNSELECT_RECIPE,
    payload: {
        id: id
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