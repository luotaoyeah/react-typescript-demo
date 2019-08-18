/*
 * React Top-Level API
 *     Reference
 *         React.Component
 *         React.PureComponent
 */

import React from 'react';
import { Divider } from 'antd';

/*
 * React.PureComponent 和 React.Component 的区别在于：
 *     React.PureComponent 实现了 shouldComponentUpdate() 方法，
 *     对 props 和 state 进行浅层比较；
 *
 * 如果一个组件，当 props 和 state 不变时，其 render() 方法返回值也不变，
 * 那么该组件就可以继承自 React.PureComponent；
 *
 * 如果一个组件定义为 PureComponent，那么它的下级组件也必须都是 PureComponent；
 */

// eslint-disable-next-line react/prefer-stateless-function
class A extends React.Component<{ name: string }> {
  public render() {
    const { name } = this.props;
    console.log('A.render()');
    return <div>{name}</div>;
  }
}

class B extends React.PureComponent<{ name: string }> {
  public render() {
    const { name } = this.props;
    console.log('B.render()');
    return <div>{name}</div>;
  }
}

/**  */
class C030102 extends React.Component<{}, { name: string; time: Date }> {
  public state: { name: string; time: Date } = {
    name: 'foo',
    time: new Date(),
  };

  public componentDidMount(): void {
    setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  public render() {
    const { name, time } = this.state;

    return (
      <div>
        {time.toISOString()}
        <Divider />
        <A name={name} />
        <Divider />
        <B name={name} />
      </div>
    );
  }
}

export { C030102 };
