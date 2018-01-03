const {
  GET_CXT,

  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILURE
} = require('../constants').default;

import {
  createAction
} from 'redux-actions';

import { getChat } from '../../reducers/chat/chatActions';

export const getRoomsRequest = createAction(GET_ROOMS_REQUEST);
export const getRoomsSuccess = createAction(GET_ROOMS_SUCCESS);
export const getRoomsFailure = createAction(GET_ROOMS_FAILURE);

export function getRoomsList(cxt) {
  return (dispatch) => {
    dispatch(getRoomsRequest());
    cxt.getRooms().then((info) => {
      dispatch(getRoomsSuccess(info));
    });
  };
}

export const createIoSuccess = createAction(GET_CXT);

export function createIo(cxt) {
  return dispatch => {
    dispatch(createIoSuccess(cxt));
    dispatch(getRoomsList(cxt));
  };
}
