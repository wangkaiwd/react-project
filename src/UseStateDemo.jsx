import React, { useState } from 'react';

const UseStateDemo = (props) => {
  console.log('useState update');
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Mike');
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1);
        setName(name + 1);
      }}>
        plus
      </button>
      <h2>count: {count} name: {name}</h2>
    </div>
  );
};

export default UseStateDemo;
