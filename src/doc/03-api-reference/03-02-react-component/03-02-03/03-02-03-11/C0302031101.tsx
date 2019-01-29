/*
 * React.Component
 *     Reference
 *         forceUpdate()
 */

import React from "react";
import { Button, Divider } from "antd";

class B extends React.Component {
  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
    nextContext: any
  ): boolean {
    console.log("B.shouldComponentUpdate()");
    return true;
  }

  public render(): React.ReactNode {
    console.log("B.render()");
    return <Button>B</Button>;
  }
}

interface IProps {}

interface IState {}

class A extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(
    nextProps: Readonly<IProps>,
    nextState: Readonly<IState>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate()");
    return true;
  }

  handleClick() {
    /*
     * 默认情况，只有当 props 或者 state 变更时，组件才会重新渲染，
     * 在其他情况下需要重新渲染组件时，可以调用 React.Component.forceUpdate() 方法，
     * 此时，会跳过 shouldComponentUpdate() 方法；
     * 下级组件依然会触发正常的生命周期，包括 shouldComponentUpdate() 方法；
     */
    this.forceUpdate();
  }

  public render(): React.ReactNode {
    console.log("render()");
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>forceUpdate()</Button>
        <Divider />
        <B />
      </React.Fragment>
    );
  }
}

class C0302031101 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return <A />;
  }
}

export { C0302031101 };
