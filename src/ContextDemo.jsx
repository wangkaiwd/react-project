import React, { Component, createContext } from 'react';

const BatteryContext = createContext(undefined);
const Middle = () => <Leaf/>;
// 函数式组件只能通过Consumer以及将函数作为子组件的方式来接收context
// const Leaf = () => {
//   return (
//     <BatteryContext.Consumer>
//       {battery => <h2>battery: {battery}</h2>}
//     </BatteryContext.Consumer>
//   );
// };

class Leaf extends Component {
  // 在类组件中可以使用静态属性来接收context,之后就可以直接通过this.context来进行访问
  static contextType = BatteryContext;

  render () {
    return (
      <h2>
        battery:{this.context}
      </h2>
    );
  }
}

class ContextDemo extends Component {
  render () {
    return (
      <BatteryContext.Provider value={40}>
        <Middle/>
      </BatteryContext.Provider>
    );
  }
}

export default ContextDemo;
