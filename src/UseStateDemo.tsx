import React, { useState } from 'react';

interface Props {

}
// Hooks规则：
//  1. 只在最顶层使用Hook: React靠Hook调用的顺序来知道哪个state对应哪个useState。
//  2. 只在React函数中调用Hook
const UseStateDemo: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  // const defaultName = 'Mike';
  // console.log('default', defaultName);
  // const [name, setName] = useState(defaultName);
  const [name, setName] = useState(() => {
    // 惰性初始state: 如果初始state需要通过复杂计算获得，则可以传入一个函数
    // 在函数中计算并返回初始的state。此函数只在初始渲染时被调用
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
