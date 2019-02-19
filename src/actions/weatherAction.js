import { getWeatherApi } from '../api/weatherApi'

export const actionTypes = {
	GETTING_WEATHER: 'GETTING',
	GET_WEATHER_SUCCESS: 'GET_SUCCESS',
	GET_WEATHER_FAILURE: 'GET_FAILURE'
}

function gettingWeather() {
	return {
		type: actionTypes.GETTING_WEATHER
	}
}

function getWeatherSuccess(weatherData) {
	return {
		type: actionTypes.GET_WEATHER_SUCCESS,
		data: weatherData
	}
}

function getWeatherFailure() {
	return {
		type: actionTypes.GET_WEATHER_FAILURE,
		data: {}
	}
}

export function getWeatherAction(cityName, tempUnit) {
	return (dispatch) => {
		dispatch(gettingWeather())
		getWeatherApi(cityName, tempUnit)
			.then((data) => {
				console.log('hêllo')
				console.log(data)
				dispatch(getWeatherSuccess(data))
			})
			.catch(() => dispatch(getWeatherFailure()))
	}
}