import {combineReducers} from 'redux'
import Recipes from './Recipes'
import Ingredients from './Ingredients'
import MealPlan from './MealPlan'

const rootReducer = combineReducers({Recipes, Ingredients, MealPlan})

export default rootReducer