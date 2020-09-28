import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

// redux
// reducers
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import reducers from './reducer/index';

// saga
import sagas from './saga';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const middlewares = [];

if (process.env.REACT_APP_APPLY_REDUX_LOGGER) {
  middlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

middlewares.push(routerMiddleware(history));

let composeEnhancers = compose;
if (process.env.REACT_APP_APPLY_REDUX_DEVTOOLS && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 });
}

const store = createStore(reducers(history), composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
