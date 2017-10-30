/**
 * activity reducer
 */
const InitialState = require('./chatInitialState').default;

const {
  GET_ROOM_DETAIL_REQUEST,
  GET_ROOM_DETAIL_SUCCESS,
  GET_ROOM_DETAIL_FAILURE,

  SUBMIT_CHAT_RECORD
} = require('../constants').default;

const initialState = new InitialState;

export default function activityReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case GET_ROOM_DETAIL_REQUEST:
      break;
    case GET_ROOM_DETAIL_SUCCESS:
      let rooms = action.payload;
      return state.set('detail', rooms);
    case GET_ROOM_DETAIL_FAILURE:
      break;
    case SUBMIT_CHAT_RECORD:
      return state.set('chatRecords', action.payload);
  }

  return state;
}
