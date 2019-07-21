import React, { useState, useEffect, useRef } from 'react';
// 定义如下自定义hooks:
//  1. 自增长count
//  2. 计算屏幕宽高尺寸
const CustomHooks = () => {
  const size = useSize();
  const [count] = useCounter(1);
  return (
    <div>
      <h3>size:{size.width} × {size.height}</h3>
      <h3>count:{count}</h3>
    </div>
  );
};

export default CustomHooks;

const useCounter = (defaultCount = 0) => {
  const [count, setCount] = useState(defaultCount);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // 这里获取到的count永远是初始值？
      // console.log('count', count); // 1
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (count >= 10) {
      clearInterval(intervalRef.current);
    }
  }, [count]);
  return [count, setCount];
};
// 自定义hooks和普通函数类似，但是有下面一些不同点：
//    1. 函数名必须使用use开头
//    2. 可以在函数内使用hooks函数，并且要遵循hooks使用规则
const useSize = () => {
  const [size, setSize] = useState(
    {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  );
  useEffect(() => {
    const onResize = () => {
      const width = document.documentElement.clientWidth, height = document.documentElement.clientHeight;
      setSize({ width, height });
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return size;
};
