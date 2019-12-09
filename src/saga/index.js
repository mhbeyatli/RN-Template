import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { RootSaga } from './RootSaga';
import { SecondSaga } from './SecondSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(RootSaga);
sagaMiddleware.run(SecondSaga);

export default store;