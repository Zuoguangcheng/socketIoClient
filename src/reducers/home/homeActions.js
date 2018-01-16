const {
} = require('../constants').default;

import {
  createAction
} from 'redux-actions';

export function selectRooms(id) {
  return (dispatch, getState) => {
    let {
      cxt,
    } = getState().app;

    var name = sessionStorage.getItem("name");
    cxt.selectRooms(id, name);
  };
}