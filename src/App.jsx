import React, { createContext, lazy, Suspense, useState, useCallback } from 'react';
// import ContextDemo from './ContextDemo';
// 使用import()动态引入组件是一个很好的利用webpack代码分割功能的方式，
// 这里我们也可以在引入路径前使用magic comment来为webpack传递一些信息从而实现类似于
// 设置代码分割chunk的名称或者预加载等功能
// const ContextDemo = lazy(() => import(/* webpackChunkName:"Context" */'./ContextDemo'));
// const MemoDemo = lazy(() => import(/*webpackChunkName: "Memo"*/ './MemoDemo'));
// const UseStateDemo = lazy(() => import(/*webpackChunkName: "UseState"*/'./UseStateDemo'));
const UseEffectDemo = lazy(() => import(/*webpackChunkName: "UseEffect"*/ './UseEffectDemo'));
const UseContextDemo = lazy(() => import(/*webpackChunkName: "UseContext"*/ './UseContextDemo'));
const UseMemoDemo = lazy(() => import(/*webpackChunkName: "UseContext"*/ './UseMemoDemo'));
const UseRefDemo = lazy(() => import(/*webpackChunkName: "UseRef"*/'./UseRefDemo'));
export const CountContext = createContext(0);

// class App extends Component {
//   state = {
//     hasError: false,
//     count: 10
//   };
//   // 如果一个class组件中定义了static getDerivedStateFromError或者componentDidCatch
//   // 这2个生命周期中的任意一个(或2个)时，那么它就变成一个错误边界。
//
//   // 此生命周期会在后代组件抛出错误后被调用，它将抛出的错误作为参数，并返回一个值以更新state
//   static getDerivedStateFromError (error) {
//     return { hasError: true };
//   }
//
//   // 此生命周期在后代组件抛出错误后被调用。它接收2个参数：error:抛出的错误，errorInfo:一个包含componentStack属性的对象(抛出错误组件的信息)
//   // componentDidCatch (error, errorInfo) {
//   //   console.log(error, errorInfo);
//   //   this.setState({ hasError: true });
//   // }
//
//   render () {
//     const { hasError, count } = this.state;
//     if (hasError) {
//       return (
//         <h2>出错了</h2>
//       );
//     }
//     return (
//       <div className="App">
//         <button onClick={() => this.setState({ count: count + 1 })}>plus({count})</button>
//         {/*<CountContext.Provider value={count}>*/}
//         <Suspense fallback={<div>loading...</div>}>
//           {/*<ContextDemo/>*/}
//           {/*<MemoDemo/>*/}
//           {/*<UseStateDemo/>*/}
//           {/*<UseEffectDemo/>*/}
//           {/*<UseContextDemo/>*/}
//         </Suspense>
//         {/*</CountContext.Provider>*/}
//       </div>
//     );
//   }
//
// }
const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // 这样会在每次更新组件的时候，重新建立一个函数
  // const onClick = () => {
  //   console.log('click');
  //   setCount2(count2 + 1);
  // };
  // 使用useCallback就会引发缓存效果，在依赖项没有更改的时候，就不会重新创建函数
  // 当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染(这里以memo为例)的子组件时，它将非常有用
  const onClick = useCallback(() => {
    console.log('click');
    setCount2((count2) => count2 + 1);
  }, []); // 当依赖项发生变化的时候会返回一个新的函数
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>plus ({count})</button>
      <Suspense fallback={<div>loading...</div>}>
        {/*<UseMemoDemo onClick={onClick}/>*/}
        <UseRefDemo/>
        <h3>{count2}</h3>
      </Suspense>
    </div>
  );
};

export default App;
