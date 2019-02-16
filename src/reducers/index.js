import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import pokemonReducer from './pokemonReducer'
import pokemonModalReducer from './pokemonModalReducer'
import weatherReducer from './weatherReducer'

const rootReducer = combineReducers({
  counterReducer,
  pokemonReducer,
  pokemonModalReducer,
  weatherReducer
})

export default rootReducer