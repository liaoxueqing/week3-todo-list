import { combineReducers } from 'redux';
import todos from './todos';
import userInfo from './userInfo';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos: todos,
  userInfo: userInfo,
  routing: routerReducer
});

export default rootReducer;
