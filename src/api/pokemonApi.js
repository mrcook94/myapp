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

export async function getPokemonApi(pokemonUrl) {
  const res = await AsyncHandle(Axios.get(pokemonUrl))
  console.log(res.data.results)
  // var data = []
  // for (let i in res.data.results) {
  //   data = [...data, res.data.results[i]]
  // }
  return res.data.results
}