import React, { lazy, Suspense, Component } from 'react';
// import ContextDemo from './ContextDemo';
// 使用import()动态引入组件是一个很好的利用webpack代码分割功能的方式，
// 这里我们也可以在引入路径前使用magic comment来为webpack传递一些信息从而实现类似于
// 设置代码分割chunk的名称或者预加载等功能
const ContextDemo = lazy(() => import(/* webpackChunkName:"Context" */'./ContextDemo'));
const MemoDemo = lazy(() => import(/*webpackChunkName: "Memo"*/ './MemoDemo'));
class App extends Component {
  state = {
    hasError: false
  };
  // 如果一个class组件中定义了static getDerivedStateFromError或者componentDidCatch
  // 这2个生命周期中的任意一个(或2个)时，那么它就变成一个错误边界。

  // 此生命周期会在后代组件抛出错误后被调用，它将抛出的错误作为参数，并返回一个值以更新state
  static getDerivedStateFromError (error) {
    return { hasError: true };
  }

  // 此生命周期在后代组件抛出错误后被调用。它接收2个参数：error:抛出的错误，errorInfo:一个包含componentStack属性的对象(抛出错误组件的信息)
  // componentDidCatch (error, errorInfo) {
  //   console.log(error, errorInfo);
  //   this.setState({ hasError: true });
  // }

  render () {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <h2>出错了</h2>
      );
    }
    return (
      <div className="App">
        <Suspense fallback={<div>loading...</div>}>
          <ContextDemo/>
          <MemoDemo/>
        </Suspense>
      </div>
    );
  }

}
export default App;
