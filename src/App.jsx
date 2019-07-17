import React, { lazy, Suspense, Component } from 'react';
// import ContextDemo from './ContextDemo';
// 使用import()动态引入组件是一个很好的利用webpack代码分割功能的方式，
// 这里我们也可以在引入路径前使用magic comment来为webpack传递一些信息从而实现类似于
// 设置代码分割chunk的名称或者预加载等功能
const ContextDemo = lazy(() => import(/* webpackChunkName:"Context" */'./ContextDemo'));
class App extends Component {
  state = {
    hasError: false
  };
  // 如果一个class组件中定义了static getDerivedStateFromError或者componentDidCatch
  // 这2个声明周期中的任意一个(或2个)时，那么它就变成一个错误边界。
  static getDerivedStateFromError () {
    return { hasError: true };
  }

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
        </Suspense>
      </div>
    );
  }

}
export default App;
