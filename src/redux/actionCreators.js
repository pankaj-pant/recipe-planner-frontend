import * as actions from './actionTypes'

export const selectDish = (dish) => ({
    type: actions.SELECT_DISH,
    payload: {
        dish: dish
    }
})