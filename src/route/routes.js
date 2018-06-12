import React from 'react'
import { Route, Redirect } from 'react-router'
import App from '@/App'
import Page404 from 'component/layout/page404'
// 这是一个react元素，相当于一个变量
const routeConfig = (
  <Route path="/" component={App}>
    <Route path="/404" component={Page404} />
    <Redirect from="*" to="/404" />
  </Route>
)
export default routeConfig;
