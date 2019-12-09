import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './src/reducers'
import FirstPage from './src/FirstPage'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './src/saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

const App = () => {
  return (
    <Provider store={store}>
      <FirstPage /> 
    </Provider>
  );
};

export default App;