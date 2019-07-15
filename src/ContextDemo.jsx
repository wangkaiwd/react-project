import React, { Component, createContext } from 'react';

const BatteryContext = createContext(undefined);
const Middle = () => <Leaf/>;
const Leaf = () => {
  return (
    <BatteryContext.consumer>
      {battery => <h2>battery: {battery}</h2>}
    </BatteryContext.consumer>
  );
};
class ContextDemo extends Component {
  render () {
    return (
      <BatteryContext.provider value={40}>
        <Middle/>
      </BatteryContext.provider>
    );
  }
}

export default ContextDemo;
