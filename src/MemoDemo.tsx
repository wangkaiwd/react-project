import React, { Component, memo, PureComponent } from 'react';

interface ChildClassProp {
  name: string
}

// PureComponent中以浅层对比prop和state的方式实现了该函数
class ChildClass extends PureComponent<ChildClassProp, {}> {
  // shouldComponentUpdate (nextProps: Readonly<ChildClassProp>): boolean {
  //   if (this.props.name === nextProps.name) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render () {
    console.log('childClass update');
    return (
      <h3>
        {this.props.name}
      </h3>
    );
  }
}

// 而在函数式组件中，通过memo来实现了prop和state的浅层对比
const ChildFunc: React.FC<ChildClassProp> = memo((props) => {
  console.log('childClass update');
  return (
    <h3>
      {props.name}
    </h3>
  );
});

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
        <h3>{count}</h3>
        {/*即使并没有更改name,但是子组件还是刷新了*/}
        <ChildFunc name={name}/>
      </div>
    );
  }
}

export default MemoDemo;