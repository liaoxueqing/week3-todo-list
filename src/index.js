import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import { Provider } from 'react-redux';

import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import App from './components/App';
import TodoInfo from './components/TodoInfo';
import Login from './components/Login';
import Register from './components/Register';

const middleware = routerMiddleware(hashHistory);
var store = createStore(reducers, applyMiddleware(middleware, thunk));

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/todos" component={App} />
      <Route path="/todos/:id" component={TodoInfo} />
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
