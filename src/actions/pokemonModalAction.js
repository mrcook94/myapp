import { getPokemonModalApi } from '../api/pokemonApi'

export const actionTypes = {
	CLOSE_MODAL: 'CLOSE_MODAL',
	SHOWING_MODAL: 'SHOWING_MODAL',
	SHOW_MODAL_SUCCESS: 'SHOW_MODAL_SUCCESS',
	SHOW_MODAL_FAILURE: 'SHOW_MODAL_FAILURE',
}

export function closeModalAction() {
	return {
		type: actionTypes.CLOSE_MODAL,
	}
}

export function showingModal() {
	return {
		type: actionTypes.SHOWING_MODAL,
	}
}

function showModalSuccess(modalItem) {
	return {
		type: actionTypes.SHOW_MODAL_SUCCESS,
		item: { ...modalItem },
	}
}

function showModalFailure() {
	return {
		type: actionTypes.SHOW_MODAL_FAILURE,
		item: {},
	}
}

export function showPokemonModalAction(itemUrl) {
	return (dispatch) => {
		dispatch(showingModal())
		getPokemonModalApi(itemUrl)
			.then((data) => {
				console.log(data)
				dispatch(showModalSuccess({ ...data }))
			})
			.catch(() => dispatch(showModalFailure()))
	}
}
