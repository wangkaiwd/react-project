import React, { useRef, useEffect, useState } from 'react';

const UseRefDemo = () => {
  // useRef比ref属性更有用，它可以很方便的保存任何可变值，类似于在class中使用实例字段的方式
  // 即相当于class组件中this上绑定的属性
  const [count, setCount] = useState(0);
  const refDemo = useRef(null);
  let intervalRef = useRef(null);
  useEffect(() => {
    console.log(refDemo);
    intervalRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

  }, []);
  useEffect(() => {
    if (count >= 0) {
      clearInterval(intervalRef.current);
    }
  });
  return (
    <div>
      <input ref={refDemo} type="text" placeholder="请输入内容"/>
      <h1>{count}</h1>
    </div>
  );
};
// 总结：
//  useRef在hooks中的作用：
//    1. 获取DOM
//    2. 获取class子组件的实例
//    3. 在每次渲染时返回同一个ref对象，它可以很方便的保存任何可变值，类似于在class中使用实例字段的方式：this.name = 'xxx' => ref.current = 'xxx'

export default UseRefDemo;
