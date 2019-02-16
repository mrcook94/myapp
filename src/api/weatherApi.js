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

export function convertTemp(temp, unit){
  
}

export async function getWeatherApi(cityName) {
  const appid = 'ac42573a53e1e3c49acd31b7c822d818'
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${appid}`
  const res = await AsyncHandle(Axios.get(weatherUrl))
  console.log(res)
  console.log(cityName)
  const { temp } = res.data.main
  return temp
}