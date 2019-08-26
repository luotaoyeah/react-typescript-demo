/*
 * React.Component
 *     Reference
 *         shouldComponentUpdate()
 */

import React from 'react';
import { Button, Divider } from 'antd';

class B extends React.Component<{}, { count: number }> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = { count: 0 };
  }

  public componentDidMount(): void {
    setInterval(() => {
      this.setState((prevState: Readonly<IState>) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  public render() {
    const { count } = this.state;
    return <Button>{count}</Button>;
  }
}

interface IState {
  count: number;
}

class A extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * 当 shouldComponentUpdate() 方法返回 false 时，
   * 组件不会更新，即 render() 方法不会调用；
   * 但是子组件的状态不受影响，即：
   *     当子组件的内部状态发生变更时，子组件依然会重新渲染；
   */
  public shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<IState>, nextContext: any): boolean {
    return nextState.count % 2 !== 0;
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>) => ({ count: prevState.count + 1 }));
  }

  public render() {
    const { count } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>{count}</Button>
        <Divider />
        <B />
      </div>
    );
  }
}

function C0302030601() {
  return <A />;
}

export { C0302030601 };
