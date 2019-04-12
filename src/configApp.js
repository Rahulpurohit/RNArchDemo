import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/';

const sagaMiddleware = createSagaMiddleware();

let applyMiddlewares = applyMiddleware(sagaMiddleware);
//'listReducer'
const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['validationReducer', 'listReducer'],
	stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducer);

// Uncomment when debug redux
if (__DEV__) {
	const logger = createLogger({ collapsed: true });
	applyMiddlewares = applyMiddleware(sagaMiddleware, logger);
}

const enhancer = compose(
	applyMiddlewares,
	// devTools()
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => {
	let store = createStore(persistedReducer, enhancer);
	sagaMiddleware.run(rootSaga);
	let persistor = persistStore(store);
	return { store, persistor };
};
