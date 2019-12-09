import React from 'react';
import { Provider } from 'react-redux';
import FirstPage from './src/FirstPage';
import Store from './src/saga';

const App = () => {
  return (
    <Provider store={Store}>
      <FirstPage /> 
    </Provider>
  );
};

export default App;