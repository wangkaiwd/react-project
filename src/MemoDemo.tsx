import React, { Component } from 'react';

interface ChildClassProp {
  name: string
}

class ChildClass extends Component<ChildClassProp, {}> {
  render () {
    console.log('childClass update');
    return (
      <h3>
        {this.props.name}
      </h3>
    );
  }
}

// const ChildFunc = () => {
//
// };

interface MemoDemoState {
  name: string;
  count: number;
}

class MemoDemo extends Component<{}, MemoDemoState> {
  state: MemoDemoState = {
    name: 'Mike',
    count: 0
  };

  render () {
    const { name, count } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          add count
        </button>
        <ChildClass name={name}/>
      </div>
    );
  }
}

export default MemoDemo;