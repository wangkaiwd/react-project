import React, { Component, createContext, lazy, Suspense, useCallback, useState } from 'react';

const ContextDemo = lazy(() => import(/* webpackChunkName: "contextDemo" */'./ContextDemo'));
const MemoDemo = lazy(() => import(/* webpackChunkName: "memoDemo" */ './MemoDemo'));
const UseStateDemo = lazy(() => import(/* webpackChunkName: "useStateDemo" */'./UseStateDemo'));
const UseEffectDemo = lazy(() => import(/* webpackChunkName: "useEffectDemo" */'./UseEffectDemo'));
const UseContextDemo = lazy(() => import(/* webpackChunkName: "UseContextDemo" */'./UseContextDemo'));
const UseMemoDemo = lazy(() => import(/* webpackChunkName: "UseContextDemo" */'./UseMemoDemo'));

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Suspense fallback={<div>loading...</div>}>
//         <ContextDemo/>
//       </Suspense>
//     </div>
//   );
// };

interface AppState {
  hasError: boolean
}

interface AppProps {

}

// class App extends Component<AppProps, AppState> {
//   state: AppState = {
//     hasError: false
//   };
//
//   // 只要用到了这俩个生命周期函数，该组件就会成为错误边界
//   static getDerivedStateFromError (error: Error) {
//     console.log('error', error);
//     // 会与state中的内容进行合并
//     return { hasError: true };
//   }
//
//   // error: 错误信息 errorInfo: 详细的组件错误栈，会告诉报错组件的名称和错误位置等
//   // componentDidCatch (error: Error, errorInfo: React.ErrorInfo): void {
//   //   console.log('error', error, errorInfo);
//   //   this.setState({ hasError: true });
//   // }
//
//   render () {
//     const { hasError } = this.state;
//     if (hasError) {
//       return (
//         <h3>something go wrong!!</h3>
//       );
//     }
//     return (
//       <Suspense fallback={<div>loading...</div>}>
//         {/*<ContextDemo/>*/}
//         {/*<MemoDemo/>*/}
//         {/*<UseStateDemo/>*/}
//         <UseEffectDemo/>
//       </Suspense>
//     );
//   }
// }
export const CountContext = createContext(0);
const App: React.FC = () => {
  const [count, setCount] = useState(0);
  // 这样依旧会在每次更新App组件的时候，重新创建函数，会导致使用类似于shouldComponentUpdate进行性能优化的子组件每次都更新
  // const onClick = () => {
  //   console.log('click');
  // };
  const onClick = useCallback(() => {
    console.log('click');
  }, []);
  const onPlus = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <CountContext.Provider value={60}>
        <button onClick={onPlus}>plus({count})</button>
        <Suspense fallback={<div>loading...</div>}>
          {/*<UseContextDemo/>*/}
          <UseMemoDemo onClick={onClick}/>
        </Suspense>
      </CountContext.Provider>
    </div>
  );
};
export default App;
