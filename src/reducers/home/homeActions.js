const {
} = require('../constants').default;

import {
  createAction
} from 'redux-actions';

export function selectRooms(id) {
  return (dispatch, getState) => {
    let {
      cxt
    } = getState().app;

    cxt.selectRooms(id);
  };
}