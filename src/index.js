import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import { Provider } from 'react-redux';

import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers';
import App from './components/App';
import TodoInfo from './components/TodoInfo';

const middleware = routerMiddleware(browserHistory);
var store = createStore(reducers, applyMiddleware(middleware));

const history = syncHistoryWithStore(browserHistory, store);
push('userInfo');

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="todoInfo" component={TodoInfo} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
