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

class A extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      num: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(
    nextProps: Readonly<IProps>,
    nextState: Readonly<IState>,
    nextContext: any
  ): boolean {
    /*
     * 如果 shouldComponentUpdate() 返回 false，则 render() 方法不会执行；
     */
    if (nextState.num % 2 === 0) {
      return false;
    }

    return true;
  }

  handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<IProps>) => {
      return { num: prevState.num + 1 };
    });
  }

  public render(): React.ReactNode {
    console.log("render()");
    return <Button onClick={this.handleClick}>{this.state.num}</Button>;
  }
}

class C0302030107 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export { C0302030107 };
