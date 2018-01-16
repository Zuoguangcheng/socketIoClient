import routes from './route';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { createIo, setName, getRoomsList } from '../reducers/app/appActions';
import { setRoomDetail } from '../reducers/chat/chatActions';
import { setChat } from '../reducers/chat/chatActions';
import {
  getCxt
} from '../../src/containers/clientService';

import PrivateRoute from './PrivateRouter';

require('normalize.css/normalize.css');
require('styles/App.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    [].map(method => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    let cxt = getCxt();
    cxt.createIo().then(socket => {
      this.props.actions.createIo(cxt);

      // 获取当前所有rooms的基本信息
      socket.on('rooms', (info) => {
        this.props.actions.getRoomsList(info);
      });

      // 实时获取当前room的聊天信息
      socket.on('chatMsg', value => {
        this.props.actions.setChat(value);
      });

      socket.on('roomsDetail', info => {

        console.log('info', info);
        this.props.actions.setRoomDetail(info);
      });
    });

    if (!sessionStorage.getItem('name')) {
      sessionStorage.setItem('name', String(new Date().getTime()));
    }
  }

  render() {
    return (
      <Switch>
        {routes.map((route, index) => (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.render}
          />
        ))}
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  let { rooms, cxt } = state.app;
  return { rooms, cxt };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ createIo, setChat, setName, getRoomsList, setRoomDetail }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
