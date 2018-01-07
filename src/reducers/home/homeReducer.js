/**
 * activity reducer
 */
const InitialState = require('./homeInitialState').default;

const {} = require('../constants').default;

const initialState = new InitialState;

export default function activityReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {

  }

  return state;
}
