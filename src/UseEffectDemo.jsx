import React, { useState, useEffect } from 'react';

const UseEffectDemo = (props) => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  useEffect(() => {
    console.log('update title');
    document.title = count.toString();
  });
  const onResize = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    // 为什么不能直接改变size(下边的代码不会生效)?
    // size.width = document.documentElement.clientWidth;
    // size.height = document.documentElement.clientHeight;
    // setSize(size)
    setSize({ width, height });
  };
  useEffect(() => {
    console.log('listen event');
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click({count})</button>
      <h3>size:{size.width} × {size.height}</h3>
    </div>
  );
};

export default UseEffectDemo;
