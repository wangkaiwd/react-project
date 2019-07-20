import React, { useState, useEffect } from 'react';

const UseEffectDemo = (props) => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  useEffect(() => {
    console.log('count change update title');
    document.title = count.toString();
  }, [count]);
  // useEffect在第一次渲染之后和每次更新之后都会执行： 相当于componentDidMount 和 componentDidUpdate
  // react保证了每次运行effect的同时,DOM都已经更新完毕
  useEffect(() => {
    console.log('component update');
  });
  useEffect(() => {
    // 当dom元素删除之后，监听的事件也会失效： 当然我们一般都会直接为元素绑定事件，而不是通过DOM操作来进行
    const box = document.querySelector('.box');
    box.addEventListener('click', onClick);
    return () => {
      box.removeEventListener('click', onClick);
    };
  });
  const onClick = () => {
    console.log('dynamic click');
  };
  const onResize = () => {
    // 为什么不能直接改变size(下边的代码不会生效)?
    // size.width = document.documentElement.clientWidth;
    // size.height = document.documentElement.clientHeight;
    // setSize(size);
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
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
      {
        count % 2 === 0 ?
          <h3 className="box">I am even</h3>
          :
          <h4 className="box"> I am odd</h4>
      }
    </div>
  );
};

export default UseEffectDemo;
