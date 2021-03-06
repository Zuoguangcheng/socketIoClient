import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'antd';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectRooms } from '../../reducers/home/homeActions';

require('./home.less');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRoomsSelect(id) {
    this.props.actions.selectRooms(id);
  }

  render() {
    let { rooms } = this.props;

    return (
      <div className="home">
        <div className="rooms">
          {
            !!rooms && rooms.map(item => {
              return (
                <div key={item.id}>
                  <Link to={`/chat/${item._id}`} onClick={() => this.handleRoomsSelect(item._id)}>
                    <Card style={{ width: 200 }}>
                      <p>{item.name}</p>
                      <p>{`${item.maxNum}人 群`}</p>
                      <p>{`现有${item.persons.length}人`}</p>
                    </Card>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { rooms } = state.app;
  return { rooms };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ selectRooms }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);