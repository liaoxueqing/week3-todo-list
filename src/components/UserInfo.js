import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.userInfo);
    return <div>{this.props.userInfo.name}</div>;
  }
}
export default UserInfo;
