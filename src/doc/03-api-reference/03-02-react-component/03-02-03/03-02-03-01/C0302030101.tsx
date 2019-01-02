/*
 * React.Component
 *     Reference
 *         render()
 */

import React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {
  num: number;
}

class C0302030101 extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = { num: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<IProps>) => {
      return { num: prevState.num + 1 };
    });
  }

  /*
   * render() 方法是 class 组件中唯一一个必须实现的方法，它的作用是：当 props 或者 state 变更时，
   * 重新渲染组件，更新 DOM；
   */
  render(): React.ReactNode {
    console.log("render()");
    return (
      <div>
        <Button onClick={this.handleClick}>{this.state.num}</Button>
      </div>
    );
  }
}

export { C0302030101 };
