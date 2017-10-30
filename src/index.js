import React from 'react';
import {
  render
} from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

/**
 * ## States
 * defines initial state
 *
 */
import appInitalState from './reducers/app/appInitialState';
import chatInitalState from './reducers/chat/chatInitialState';

/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in App
 * @returns {Object} object with 4 keys
 */
function getInitialState() {
  const _initState = {
    app: new appInitalState,
    chat: new chatInitalState
  };
  return _initState;
}

const store = configureStore(getInitialState());

render( <
  Root store = {
    store
  }
  />,
  document.getElementById('app')
);
if (module.hot) {
  module.hot.accept();
}
