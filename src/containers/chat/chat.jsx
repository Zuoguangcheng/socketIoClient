import React from 'react';
import { Input, Button } from 'antd';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  getRoomDetail,
  submit,
  setChat
} from '../../reducers/chat/chatActions';
import { createIo } from '../../reducers/app/appActions';



require('./chat.less');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRecord: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    setTimeout(() => {
      this.props.actions.getRoomDetail(id);
    });
  }

  handleSubmit() {
    const detail = this.props.detail[0];
    let { chatRecord } = this.state;
    this.setState({ chatRecord: '' });

    this.props.actions.submit(detail.id, chatRecord);
  }

  handleInputChange(e) {
    let { value } = e.target;
    this.setState({ chatRecord: value });
  }

  render() {
    const detail = this.props.detail[0];
    let { chatRecords } = this.props;
    let { chatRecord } = this.state;

    return (
      <div className="chat">
        <div className="left">
          <div>{`群人数${detail && detail.maxNum}`}</div>
          <div>{`群当前人数${detail && detail.persons.length}`}</div>

          <ul>
            {detail && detail.persons.map((item, index) => <li key={index}>{item.name}</li>)}
          </ul>
        </div>

        <div className="right">
          <div className="right-content">
            <div className="chat-records-content">
              <div className="chat-records-other">
              </div>
              <div className="chat-records-own">
                {chatRecords.map((item, index) => <p key={index}><span>{item}</span></p>)}
              </div>
            </div>

            <div className="input">
              <Input size="large" onChange={this.handleInputChange} value={chatRecord} />
            </div>
            <div className="btn">
              <Button
                style={{ width: '100px' }}
                size="large"
                type="primary"
                onClick={this.handleSubmit}
              >
                提交
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { detail, chatRecords } = state.chat;
  return { detail, chatRecords };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getRoomDetail, submit, setChat, createIo }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);