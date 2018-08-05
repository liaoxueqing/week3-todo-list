import { connect } from 'react-redux';
import React, { Component } from 'react';
import { logOut, getUserInfo } from '../actions/index.js';
class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUserInfo();
  }
  render() {
    return (
      <div>
        <div className="row mx-auto">
          <h1 className="mx-auto" style={{ padding: 30 }}>
            TODO LIST
          </h1>
        </div>
        <div style={{ width: 800 }} className="row mx-auto">
          <img
            className="col-md-2"
            src={require('./head.jpg')}
            style={{ height: 100, padding: 0 }}
          />
          <div className="col-md-8" style={{ paddingTop: 10 }}>
            <h6>Id&nbsp;:&nbsp;{this.props.userInfo.id}</h6>
            <h6>Name&nbsp;:&nbsp;{this.props.userInfo.name}</h6>
            <a
              onClick={() => {
                this.props.logOut();
              }}
            >
              Click Here Login Out
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  };
};
const mapDispatchToProps = {
  logOut,
  getUserInfo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
