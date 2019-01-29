import { getPokemonApi } from '../api/pokemonApi'

export const actionTypes = {
  LOADING_DATA: 'IS_LOADING',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_FAILURE: 'LOAD_FAILURE'
}

function Loading() {
  return {
    type: actionTypes.LOADING_DATA,
    data: []
  }
}

function LoadSuccess(listData) {
  return {
    type: actionTypes.LOAD_SUCCESS,
    data: listData
  }
}

function LoadFailure() {
  return {
    type: actionTypes.LOAD_FAILURE,
    data: []
  }
}

export function LoadNextPokemonAction(nextUrl) {
  return (dispatch) => {
    dispatch(Loading)
  }
}

export function GetPokemonListAction(PokemonUrl) {
  return (dispatch) => {
    dispatch(Loading())
    getPokemonApi(PokemonUrl)
      .then((data) => {
        console.log('data action')
        console.log(data)
        dispatch(LoadSuccess(data))
      })
      .catch(() => dispatch(LoadFailure()))
  }
}

