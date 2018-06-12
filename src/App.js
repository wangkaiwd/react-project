import React, { Component } from 'react'
import { Layout } from 'antd';
import TopHeader from 'component/layout/topHeader'
const { Content } = Layout;
class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Layout>
        <Content>
          <TopHeader />
          <div className="main">
            {this.props.children}
          </div>
        </Content>
      </Layout>
    )
  }
}

export default App
