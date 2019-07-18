import React, { Component, memo } from 'react';

// class Child extends PureComponent {
//   // 通过shouldComponentUpdate来进行性能优化，只有当name发生改变后才会更新Child
//   // 当传入的props是简单对象时：可以理解为props中传入的属性对应的值是简单数据类型，可以用PureComponent来帮我们自动优化
//   // shouldComponentUpdate (nextProps, nextState) {
//   //   if (nextProps.name === this.props.name) {
//   //     return false;
//   //   }
//   // }
//
//   render () {
//     console.log('child update');
//     return (
//       <div>
//         {this.props.name}
//       </div>
//     );
//   }
// }

// 在函数式组件中可以使用memo来实现类似于PureComponent的性能优化
const Child = memo((props) => {
  console.log('child update');
  return (
    <div>
      {props.name}
    </div>
  );
});

class MemoDemo extends Component {
  state = {
    count: 0,
    person: {
      age: 0
    },
    name: 'Mike'
  };

  callback = () => {

  };

  render () {
    const { count, person, name } = this.state;
    return (
      <div>
        {/*点击button后，即使Child组件对应的props的值并为发生改变，但还是进行重新渲染*/}
        <button onClick={() => {
          person.age = person.age + 1;
          this.setState({ count: count + 1, person });
        }}>
          click no update child
        </button>
        <button onClick={() => this.setState({ name: name + 1 })}>
          click to update child
        </button>
        <h4>count: {count}, age: {person.age}</h4>
        {/*这里即使person.age已经发生了变化，但是Child组件并不会更新*/}
        <Child name={name} cb={this.callback} person={person}/>
      </div>
    );
  }
}

export default MemoDemo;
