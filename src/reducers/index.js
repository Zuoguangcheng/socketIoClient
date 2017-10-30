import {
  routerReducer as routing
} from 'react-router-redux';
import {
  combineReducers
} from 'redux';

import app from './app/appReducer';
import chat from './chat/chatReducer';

/**
 * ## CombineReducers
 *
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = combineReducers({
  routing,

  app,
  chat
});

export default rootReducer;
