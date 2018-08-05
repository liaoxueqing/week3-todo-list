import React, { Component } from 'react';
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
export default App;
