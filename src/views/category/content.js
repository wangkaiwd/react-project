import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <LeftList params={this.props.params.type} />
        <Aside />
      </div>
    );
  }
}

const LeftList = (props) => (
  <div className="left-list">
    {props.params || '全部'}
  </div>
)

const Aside = () => (
  <div className="right-aside">
    侧边栏
  </div>
)
export default Content;
