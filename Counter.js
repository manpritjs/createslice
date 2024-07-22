import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;