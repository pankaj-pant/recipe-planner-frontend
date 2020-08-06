import {combineReducers} from 'redux'
import Dish from './Dish'
import Ingredients from './Ingredients'
import MealPlan from './MealPlan'

const rootReducer = combineReducers({Dish, Ingredients, MealPlan})

export default rootReducer