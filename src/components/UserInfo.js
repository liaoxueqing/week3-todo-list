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
export default UserInfo;
