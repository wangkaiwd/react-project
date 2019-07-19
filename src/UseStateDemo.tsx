import React, { useState } from 'react';

interface Props {

}

const UseStateDemo: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  // const defaultName = 'Mike';
  // const [name, setName] = useState(defaultName);
  const [name, setName] = useState(() => {
    console.log('get default name');
    return 'Mike';
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        click
      </button>
      <h3>{count}</h3>
      <h2>{name}</h2>
    </div>
  );
};

export default UseStateDemo;