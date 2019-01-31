import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import pokemonReducer from './pokemonReducer'
import pokemonModalReducer from './pokemonModalReducer'

const rootReducer = combineReducers({
  counterReducer,
  pokemonReducer,
  pokemonModalReducer,
})

export default rootReducer