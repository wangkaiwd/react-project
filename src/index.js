import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routeConfig from './route/routes'
// 初始化样式
import "./assets/style/reset.less"
// 基础样式
import "./assets/style/index.less"
const render = routes => {
  ReactDOM.render(
    <Router routes={routes} history={hashHistory} />,
    document.getElementById('app')
  )
}

render(routeConfig)

if (module.hot) {
  // 当 "./App"文件发生变化时，重新执行render(App)
  module.hot.accept('./route/routes.js', () => {
    render(routeConfig)
  })
}

/**
 * webpack Api: accept
 * 1. 接受(accept)给定依赖模块更新，并触发一个回掉函数来对这些更新做出响应。
 * @example:
 * module.hot.accept(
 * dependencies, // 可以是一个字符串或字符串数组
 * callback, // 用于在模块更新后触发函数
 * )
 *
 */

/**
 * 真正启用热更新的3步：
 *  1. 配置devServer: hot: true;
 *  2. 开启webpack自带插件： HotModuleReplacementPlugin
 *  3. 在主要js文件中检查是否有module.hot：
 *   if(module.hot) {
 *     module.hot.accept();
 *   }
 */
