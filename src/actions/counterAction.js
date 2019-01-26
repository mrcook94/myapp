export const actionTypes = {
  INCREMENT: 'COUNT.INCREMENT',
  DECREMENT: 'COUNT.DECREMENT',

}

export function CountingUp(text) {
  return {
    type: actionTypes.INCREMENT,
    text: text
  }
}

export function CountingDown(text) {
  return {
    type: actionTypes.DECREMENT,
    text: text
  }
}