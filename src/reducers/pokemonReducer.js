import { actionTypes } from '../actions/pokemonAction'

const initState = {
  pokemonData: [],
  isLoading: false,
}

function pokemonReducer(state= initState, action){
  switch (action.type){
    case actionTypes.LOADING_DATA:
    return {
      ...state,
      isLoading: true
    }
    case actionTypes.LOAD_SUCCESS:
    return {
      ...state,
      pokemonData: action.data,
      isLoading: false,
    }
    case actionTypes.LOAD_FAILURE:
    return {
      ...state,
      isLoading: false
    }
    default: return state
  }
}

export default pokemonReducer