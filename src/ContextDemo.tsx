import React, { Component, createContext } from 'react';

const BatteryContext = createContext(90);
const Middle = () => <Leaf/>;
const Leaf = () => (
  <BatteryContext.Consumer>
    {
      battery => <h2>battery: {battery}</h2>
    }
  </BatteryContext.Consumer>
);

interface StateProps {
  battery: number,
  status: 'online' | 'offline'
}

// reference: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
class ContextDemo extends Component<{}, StateProps> {
  state: StateProps = {
    battery: 60,
    status: 'online'
  };

  render () {
    const { battery } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <button onClick={() => this.setState({ battery: battery - 1 })}>
          click
        </button>
        <Middle/>
      </BatteryContext.Provider>
    );
  }
}

export default ContextDemo;