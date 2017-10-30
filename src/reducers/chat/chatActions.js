const {
  GET_ROOM_DETAIL_REQUEST,
  GET_ROOM_DETAIL_SUCCESS,
  GET_ROOM_DETAIL_FAILURE,

  SUBMIT_CHAT_RECORD
} = require('../constants').default;
import {
  getCxt
} from '../../containers/clientService';
import {
  createAction
} from 'redux-actions';

export const getRoomDetailRequest = createAction(GET_ROOM_DETAIL_REQUEST);
export const getRoomDetailSuccess = createAction(GET_ROOM_DETAIL_SUCCESS);
export const getRoomDetailFailure = createAction(GET_ROOM_DETAIL_FAILURE);

export function getRoomDetail(id) {
  return (dispatch, getState) => {
    let {
      cxt
    } = getState().app;

    cxt.getRoomDetail(id).then(info => {
      dispatch(getRoomDetailSuccess(info));
    });
  };
}

export function submit(id, chatRecord) {
  return (dispatch, getState) => {
    let {
      cxt
    } = getState().app;

    cxt.sendMsg(id, chatRecord)
    let chatRecords = getState().chat.chatRecords;
    chatRecords.push(chatRecord);
    dispatch(createAction(SUBMIT_CHAT_RECORD)(chatRecords));
  };
}
