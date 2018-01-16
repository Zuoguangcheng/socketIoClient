const {
  GET_CXT,

  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILURE,

  SET_NAME,
} = require('../constants').default;

import {
  createAction
} from 'redux-actions';

import {
  getChat
} from '../../reducers/chat/chatActions';

export const getRoomsRequest = createAction(GET_ROOMS_REQUEST);
export const getRoomsSuccess = createAction(GET_ROOMS_SUCCESS);
export const getRoomsFailure = createAction(GET_ROOMS_FAILURE);

export function getRoomsList(info) {
  return dispatch => {
    dispatch(getRoomsRequest());
    dispatch(getRoomsSuccess(info));
  };
}

export const createIoSuccess = createAction(GET_CXT);

export function createIo(cxt) {
  return dispatch => {
    dispatch(createIoSuccess(cxt));
  };
}

export const setNameSuccess = createAction(SET_NAME);
export function setName(name) {
  return dispatch => {
    dispatch(setNameSuccess(name))
  }
}
