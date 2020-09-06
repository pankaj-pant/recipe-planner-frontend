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

export const addIngredient = (ingredient) => ({
    type: actions.ADD_INGREDIENT,
    payload: {
        ingredient: ingredient
    }
})

export const deleteIngredient = (id) => ({
    type: actions.REMOVE_INGREDIENT,
    payload: {
        id: id
    }
})

export const generateShoppingList = (mealPlan) => ({
    type: actions.GENERATE_SHOPPING_LIST,
    payload: {
        mealPlan: mealPlan
    }
})