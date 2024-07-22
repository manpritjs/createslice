import React from 'react';
import Counter from './Counter';
import CounterActions from './CounterActions';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <CounterActions />
      </div>
    </Provider>
  );
};

export default App;

