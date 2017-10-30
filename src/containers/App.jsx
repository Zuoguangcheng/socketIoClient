import routes from './route';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createIo } from '../reducers/app/appActions';
import { getRoomDetailOn } from '../reducers/chat/chatActions';

import PrivateRoute from './PrivateRouter';

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    [].map(method => this[method] = this[method].bind(this));
  }

  componentDidMount() {
    this.props.actions.createIo();
  }

  render() {
    return (
      <div>
        <Switch>
          {
            routes.map((route, index) => (
              <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.render}
              />
            ))
          }
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { rooms, cxt } = state.app;
  return { rooms, cxt };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ createIo, getRoomDetailOn }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
