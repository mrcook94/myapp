import { actionTypes } from '../actions/pokemonAction'

const initState = {
  pokemonData: [],
  isLoading: false,
  pokemonUrl: 'https://pokeapi.co/api/v2/pokemon',
}

function pokemonReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOADING_DATA:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.LOAD_SUCCESS:
      return {
        ...state,
        pokemonData: [...state.pokemonData, ...action.data],
        pokemonUrl: action.next,
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