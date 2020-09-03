import {combineReducers} from 'redux'
import Recipes from './Recipes'
import Ingredients from './Ingredients'

const rootReducer = combineReducers({Recipes, Ingredients})

export default rootReducer