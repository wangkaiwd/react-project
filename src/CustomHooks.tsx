import React, { useEffect, useRef, useState } from 'react';

const CustomHooks = () => {
  const size = useSize();
  const [count, setCount] = useCount(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        plus
      </button>
      <h2>size: {size.width} x {size.height}</h2>
      <h2>
        count:{count}
      </h2>
    </div>
  );
};

export default CustomHooks;

interface SizeProp {
  width: number;
  height: number;
}

const useSize = () => {
  const [size, setSize] = useState<SizeProp>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  useEffect(() => {
    const onResize = (e: UIEvent) => {
      console.log('e', e.target);
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return size;
};

const useCount = (defaultCount = 0) => {
  const [count, setCount] = useState(defaultCount);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(Number(intervalRef.current));
    };
  }, [count]);
  useEffect(() => {
    if (count >= 40) {
      clearInterval(Number(intervalRef.current));
    }
  }, [count]);
  return [count, setCount] as [number, (count: number) => void];
};
