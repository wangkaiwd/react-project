import React, { Component, createContext } from 'react';

// context: 地区偏好，UI主题这些数据可以通过context来管理，极大的减少了传递属性的繁琐性
// 在正常使用中，尽可能不要使用多个context,会导致代码不易维护
const BatteryContext = createContext(90);
const StatusContext = createContext('onLine');
const Middle = () => <LeafClass/>;
// 函数式组件通过Consumer访问函数中的参数来获取到最近的Provider提供的value值
const Leaf = () => (
  <BatteryContext.Consumer>
    {
      battery => (
        <StatusContext.Consumer>
          {
            status => <h2>battery: {battery} status:{status}</h2>
          }
        </StatusContext.Consumer>
      )
    }
  </BatteryContext.Consumer>
);

interface LeafState {

}

interface LeafProps {

}

// 在class组件中通过contextType来访问最近的Provider提供的value值
// Deprecated symbol used, consult docs for better alternative
class LeafClass extends Component <{}, {}> {
  static contextType = BatteryContext;

  render () {
    return (
      <h2>
        {this.context}
      </h2>
    );
  }
}

interface StateProps {
  battery: number,
  status: 'onLine' | 'offLine'
}

interface PropProps {

}

// reference: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
class ContextDemo extends Component<PropProps, StateProps> {
  state: StateProps = {
    battery: 60,
    status: 'onLine'
  };

  render () {
    const { battery, status } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <StatusContext.Provider value={status}>
          <button onClick={() => this.setState({ battery: battery - 1 })}>
            click
          </button>
          <button
            onClick={() => this.setState({ status: status === 'onLine' ? 'offLine' : 'onLine' })}
          >
            change status
          </button>
          <Middle/>
        </StatusContext.Provider>
      </BatteryContext.Provider>
    );
  }
}

export default ContextDemo;