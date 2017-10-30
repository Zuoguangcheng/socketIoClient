import React from 'react';
import {
  Redirect
} from 'react-router-dom';


import Home from '../containers/home/home';
import Chat from '../containers/chat/chat';

const route = [{
  path: '/home',
  exact: true,
  render: props => < Home {...props} />
}, {
  path: '/chat/:id',
  exact: true,
  render: props => < Chat {...props} />
}];

export default route;
