
'use strict';

import { createStore, compose, applyMiddleware } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { sagaMonitor, loggerMiddleware } from '../../config';
import reducers from '../reducer/';
import rootSaga from '../sagas/';

const middleWare = [];
//middleWare.push(loggerMiddleware);

// Setup Redux-Saga
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleWare.push(sagaMiddleware);

const store = createStore(reducers, {}, compose(applyMiddleware(...middleWare)));

// Initiate root saga.
sagaMiddleware.run(rootSaga);

export default store;
