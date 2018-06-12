import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import App from '@/App'
import Page404 from 'component/layout/page404'
import Category from "views/category"
import Content from "views/category/content"
// 这是一个react元素，相当于一个变量
const routeConfig = (
  <Route path="/" component={App}>
    <IndexRoute component={Category} />
    <Route path="/category" component={Category}>
      <IndexRoute component={Content} />
      <Route path="/category/:type" component={Content} />
    </Route>
    <Route path="/404" component={Page404} />
    <Redirect from="*" to="/404" />
  </Route>
)
export default routeConfig;
