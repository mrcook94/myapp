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

export async function getPokemonModalApi(pokemonUrl) {
	const res = await AsyncHandle(Axios.get(pokemonUrl))
	console.log(res.data.weight)
	console.log(res.data.name)
	console.log(res.data.sprites.front_default)
	const { name, height, weight } = res.data
	const image = res.data.sprites.front_default
	return ({
		name,
		height,
		weight,
		image
	})

}

export async function getPokemonApi(pokemonUrl) {
	const res = await AsyncHandle(Axios.get(pokemonUrl))
	console.log(res.data.results)
	const dataList = res.data.results
	const nextUrl = res.data.next
	// var data = []
	// for (let i in res.data.results) {
	//   data = [...data, res.data.results[i]]
	// }
	return ({ dataList, nextUrl })
}