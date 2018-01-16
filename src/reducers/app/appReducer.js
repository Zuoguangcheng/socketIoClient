/**
 * activity reducer
 */
const InitialState = require('./appInitialState').default;

const {
  GET_CXT,

  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILURE,

  SET_NAME,
} = require('../constants').default;

const initialState = new InitialState;

export default function activityReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case GET_CXT:
      return state.set('cxt', action.payload);
    case GET_ROOMS_REQUEST:
      break;
    case GET_ROOMS_SUCCESS:
      let rooms = action.payload;
      return state.set('rooms', rooms);
    case GET_ROOMS_FAILURE:
      break;
    case SET_NAME:
      return state.set('name', action.payload);
  }

  return state;
}
