import { connect } from 'react-redux';
// import UserInfo from "../components/UserInfo";

import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="text-center" style={{ margin: '30px auto' }}>
        <h1>{this.props.userInfo.name}'s TODO LIST</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const userInfo = state.userInfo;
  return {
    userInfo
  };
};

export default connect(mapStateToProps)(UserInfo);
