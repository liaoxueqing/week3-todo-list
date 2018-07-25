import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="text-center" style={{ margin: '30px auto' }}>
        {this.props.userInfo.name}'s todo list
      </div>
    );
  }
}
export default UserInfo;
