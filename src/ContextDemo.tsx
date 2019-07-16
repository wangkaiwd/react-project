import React, { Component, createContext } from 'react';

// context: 地区偏好，UI主题这些数据可以通过context来管理，极大的减少了传递属性的繁琐性
const BatteryContext = createContext(90);
const StatusContext = createContext('onLine');
const Middle = () => <Leaf/>;
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

// 在class组件中通过contextType来访问最近的Provider提供的value值
// 函数式组件通过Consumer访问函数中的参数来获取到最近的Provider提供的value值
interface StateProps {
  battery: number,
  status: 'onLine' | 'offLine'
}

// reference: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
class ContextDemo extends Component<{}, StateProps> {
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