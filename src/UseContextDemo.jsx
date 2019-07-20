import React, { useContext } from 'react';
import { CountContext } from './App';

const UseContextDemo = (props) => {
  const count = useContext(CountContext);
  return (
    <div>{count}</div>
  );
};

export default UseContextDemo;
