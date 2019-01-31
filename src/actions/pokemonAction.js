import { getPokemonApi } from '../api/pokemonApi'

export const actionTypes = {
  LOADING_DATA: 'IS_LOADING',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_FAILURE: 'LOAD_FAILURE',
  DELETE_POKEMON: 'DELETE_POKEMON'
}

function Loading() {
  return {
    type: actionTypes.LOADING_DATA,
    data: []
  }
}

function LoadSuccess(listData, nextUrl) {
  return {
    type: actionTypes.LOAD_SUCCESS,
    data: listData,
    next: nextUrl
  }
}

function LoadFailure() {
  return {
    type: actionTypes.LOAD_FAILURE,
    data: []
  }
}

function deletePokemonAction(index) {
  return {
    type: actionTypes.DELETE_POKEMON,
    index: index,
  }
}

export function GetPokemonListAction(PokemonUrl) {
  return (dispatch) => {
    dispatch(Loading())
    getPokemonApi(PokemonUrl)
      .then((data) => {
        console.log('data action')
        console.log(data.dataList)
        console.log(data.nextUrl)
        dispatch(LoadSuccess(data.dataList, data.nextUrl))
      })
      .catch(() => dispatch(LoadFailure()))
  }
}

