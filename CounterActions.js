import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './store'; // Import actions from store

const CounterActions = () => {
  const dispatch = useDispatch();

  // No need to define actions here, use imported ones
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterActions;
