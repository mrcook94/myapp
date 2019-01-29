import { actionTypes } from '../actions/counterAction'

const initState = {
  countNumber: 0,
  textInput: ''
}

function appReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        countNumber: state.countNumber + 1,
        textInput: action.text,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        countNumber: state.countNumber - 1,
        textInput: action.text
      }
    default:
      return state
  }
}

export default appReducer