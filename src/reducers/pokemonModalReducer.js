import { actionTypes } from '../actions/pokemonModalAction'

const defaultPokemon = {
	name: 'no name',
	height: null,
	weight: null,
	image: null,
}

const initState = {
	pokemonItem: defaultPokemon,
	isModalVisible: false,
	isPokemonShowing: false,
	message: '...LOADING'
}

function pokemonModalReducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CLOSE_MODAL:
			return {
				...state,
				isModalVisible: false
			}
		case actionTypes.SHOWING_MODAL:
			return {
				...state,
				isPokemonShowing: true,
				isModalVisible: true,
			}
		case actionTypes.SHOW_MODAL_SUCCESS:
			return {
				...state,
				pokemonItem: action.item,
				isPokemonShowing: false,
			}
		case actionTypes.SHOW_MODAL_FAILURE:
			return {
				...state,
				isPokemonShowing: false,
				pokemonItem: action.item,
				message: 'LOAD FAIL!!!'
			}
		default:
			return state
	}
}

export default pokemonModalReducer