import React, { memo, useMemo } from 'react';

interface Props {
  count?: number;
  onClick?: () => void
}

// memo: 对传入的内容进行浅比较
const UseMemoDemo: React.FC<Props> = memo(({ count = 0, onClick }) => {
  console.log('useMemo update');
  // 只会在依赖项发生变化的时候才会执行，并且返回值可以应用到组件中
  const double = useMemo(() => {
    return count * 2;
  }, [count % 3 === 0]);
  return (
    <h3 onClick={onClick}>
      double: {double}
    </h3>
  );
});
export default UseMemoDemo;
UseMemoDemo.defaultProps = {
  count: 0,
  onClick: () => {}
};
