import Axios from 'axios'

async function AsyncHandle(asyncFunction) {
	try {
		const res = await asyncFunction
		return res
	} catch (err) {
		// TODO: Log error
		throw err
	}
}

export async function getWeatherApi(cityName, tempUnit) {
	const appid = 'ac42573a53e1e3c49acd31b7c822d818'
	const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${appid}`
	const res = await AsyncHandle(Axios.get(weatherUrl))
	const { temp } = res.data.main
	if (tempUnit === 'C') {
		return (temp - 275.15)
	}
	if (tempUnit === 'F') {
		return ((temp - 275.15) * 1.8 + 32)
	}
	return temp
}