/*
 * https://reactjs.org/docs/react-component.html#forceupdate
 */

import React from 'react';
import { Button } from 'antd';

class C030213A extends React.Component {
  private x: number = 0;

  public constructor(props: Readonly<{}>) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * 默认情况下, 只有当 props 或者 state 发生变更时, 组件才会重新渲染,
   * 如果在其他情况下需要重新渲染组件, 可以调用 forceUpdate() 方法,
   * 此时, 会跳过执行 shouldComponentUpdate() 方法, 直接调用 render() 方法
   */
  public handleClick() {
    this.x = this.x + 1;
    this.forceUpdate();
  }

  public render() {
    return <Button onClick={this.handleClick}>{this.x}</Button>;
  }
}

function C030213() {
  return <C030213A />;
}

export { C030213 };
