import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import { Provider } from 'react-redux';

import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import App from './components/App';
import TodoInfo from './components/TodoInfo';
import Login from './components/Login';

const middleware = routerMiddleware(browserHistory);
var store = createStore(reducers, applyMiddleware(middleware, thunk));

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="todoInfo/:id" component={TodoInfo} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
