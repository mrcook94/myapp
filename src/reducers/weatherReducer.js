import { actionTypes } from '../actions/weatherAction'

const initState = {
  temp: '',
  unit: 'độ C',
  isGetting: false,
  mess: 'Nhập tên thành phố'
}

function weatherReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GETTING_WEATHER:
      return {
        ...state,
        isGetting: true,
        mess: 'Đợi tí nha'
      }
    case actionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        isGetting: false,
        temp: action.data,
        mess: 'Nhiệt độ'
      }
    case actionTypes.GET_WEATHER_FAILURE:
      return {
        ...state,
        isGetting: false,
        mess: 'Lỗi cmnr'
      }
    default: return state
  }
}

export default weatherReducer