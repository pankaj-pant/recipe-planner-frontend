import {createStore} from 'redux'
import rootReducer from './reducers/index'
import {loadState, saveState} from './localStorage'
import { composeWithDevTools } from 'redux-devtools-extension'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState, composeWithDevTools())

store.subscribe(() => {
    saveState(store.getState())
})

export default store