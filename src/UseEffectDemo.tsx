import React, { useEffect, useState } from 'react';

interface Props {

}

interface SizeProps {
  width: number;
  height: number;
}

const UseEffectDemo: React.FC<Props> = () => {
  const [count, setCount] = useState<number>(0);
  const [size, setSize] = useState<SizeProps>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  useEffect(() => {
    const onResize: EventListener = () => {
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
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        plus({count})
      </button>
      <h2>size: {size.width} × {size.height}</h2>
      <h2>count: {count}</h2>
    </div>
  );
};

export default UseEffectDemo;
