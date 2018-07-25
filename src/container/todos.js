import React from 'react';
import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';

const mapStateToProps = state => {
  const todos = state.todos;
  debugger;
  console.log('todos', todos);
  return {
    todos
  };
};

export default connect(mapStateToProps)(ToDoList);
