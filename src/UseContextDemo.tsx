import React, { useContext } from 'react';
import { CountContext } from '@/App';

const UseContextDemo = () => {
  const count = useContext(CountContext);
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

export default UseContextDemo;
