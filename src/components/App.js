import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import UserInfo from '../container/userInfo';
import ToDoList from './ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <UserInfo />
        <ToDoList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin
  };
};
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
