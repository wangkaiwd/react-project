import React, { useMemo, memo } from 'react';
// 使用memo对函数式组件的props进行浅层对比
const UseMemoDemo = memo((props) => {
  // 传入useMemo的函数会在渲染期间执行，请不要在这个函数内部执行与渲染无关的操作
  // 会在依赖项发生改变的时候才会重新执行函数内容，从而更新double值，避免不必要的更新
  // 相比于useEffect，useMemo不能用来处理副作用，并且useMemo的返回值可以直接在组件中使用
  console.log('useMemo update');
  const double = useMemo(() => {
    console.log('double update');
    return props.count * 2;
  }, [props.count % 3 === 0]); // 依赖的值发生变化后会执行函数
  return (
    <div>
      <h3 onClick={props.onClick}>double: {double}</h3>
    </div>
  );
});
UseMemoDemo.defaultProps = {
  count: 0
};
export default UseMemoDemo;
