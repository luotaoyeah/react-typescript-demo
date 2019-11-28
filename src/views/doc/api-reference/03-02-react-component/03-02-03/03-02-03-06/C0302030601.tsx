/*
 * React.Component
 *     Reference
 *         shouldComponentUpdate()
 */

import React from "react";
import { Button, Divider } from "antd";

class B extends React.Component<{}, { count: number }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = { count: 0 };
  }

  componentDidMount(): void {
    setInterval(() => {
      this.setState((prevState: Readonly<IState>) => {
        return { count: prevState.count + 1 };
      });
    }, 1000);
  }

  public render() {
    return <Button>{this.state.count}</Button>;
  }
}

interface IProps {}

interface IState {
  count: number;
}

class A extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
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
  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {
    return nextState.count % 2 !== 0;
  }

  handleClick() {
    this.setState((prevState: Readonly<IState>) => {
      return { count: prevState.count + 1 };
    });
  }

  public render() {
    return (
      <div>
        <Button onClick={this.handleClick}>{this.state.count}</Button>
        <Divider />
        <B />
      </div>
    );
  }
}

class C0302030601 extends React.Component {
  public render() {
    return <A />;
  }
}

export { C0302030601 };
