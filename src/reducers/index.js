import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import pokemonReducer from './pokemonReducer'

const rootReducer = combineReducers({
  counterReducer,
  pokemonReducer,
})

export default rootReducer