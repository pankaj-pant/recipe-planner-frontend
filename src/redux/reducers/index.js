import {combineReducers} from 'redux'
import Dish from './Dish'
import Ingredients from './Ingredients'

const rootReducer = combineReducers({Dish, Ingredients})

export default rootReducer