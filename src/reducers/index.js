import { combineReducers } from 'redux';
import todos from './todos';
import userInfo from './userInfo';

const rootReducer = combineReducers({
  todos: todos,
  userInfo: userInfo
});

export default rootReducer;
