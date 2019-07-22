import React, { useEffect, useRef, useState } from 'react';

const UseRefDemo = () => {
  const [count, setCount] = useState(0);
  // 可以通过NodeJS.Timeout来通过useRef来定义定时器返回值的类型
  // https://github.com/Microsoft/TypeScript/issues/2031#issuecomment-74338247
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  useEffect(() => {
    if (intervalRef) {
      intervalRef.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  }, []);
  useEffect(() => {
    if (count >= 10) {
      clearInterval(Number(intervalRef.current));
    }
  });
  return (
    <h1>
      {count}
    </h1>
  );
};

export default UseRefDemo;
