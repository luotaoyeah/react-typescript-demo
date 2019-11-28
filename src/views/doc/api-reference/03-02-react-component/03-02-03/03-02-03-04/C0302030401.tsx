/*
 * React.Component
 *     Reference
 *         componentDidUpdate()
 */

import React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {
  count: number;
}

/*
 * 当组件发生更新时，会调用 componentDidUpdate() 方法，
 * 此时，DOM已经完成更新；
 */
class A extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const vm = this;

    vm.setState((prevState: Readonly<IState>, props: Readonly<IProps>) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log("componentDidUpdate()");
    /*
     * 通常可以在 componentDidUpdate() 中请求后台数据，
     * 但是通常需要先检查 props 是否有变更；
     */
  }

  public render() {
    return <Button onClick={this.handleClick}>{this.state.count}</Button>;
  }
}

class C0302030401 extends React.Component {
  public render() {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export { C0302030401 };
