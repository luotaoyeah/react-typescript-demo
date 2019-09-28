/*
 * React.Component
 *     Reference
 *         componentDidUpdate()
 *             getSnapshotBeforeUpdate()
 */

import React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {
  count: number;
}

class A extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * getSnapshotBeforeUpdate() 处于 pre-commit phase，
   * 即，在 render() 执行之后，在更新 DOM 之前执行；
   * 如果组件实现了该方法，则其返回值会作为 componentDidUpdate() 方法的第三个参数；
   */
  getSnapshotBeforeUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>
  ): any | null {
    console.log("getSnapshotBeforeUpdate()");
    return { foo: "foo" };
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    console.log(snapshot);
  }

  handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<IProps>) => {
      return { count: prevState.count + 1 };
    });
  }

  public render(): React.ReactNode {
    return <Button onClick={this.handleClick}>{this.state.count}</Button>;
  }
}

class C0302030402 extends React.Component {
  public render(): React.ReactNode {
    return <A />;
  }
}

export { C0302030402 };
