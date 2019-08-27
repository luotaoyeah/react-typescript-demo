/*
 * https://reactjs.org/docs/react-component.html#componentdidupdate
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

class C03020501A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = { count: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * 组件完成更新之后会调用 componentDidUpdate() 方法,
   * 此时, DOM 已经完成更新, 浏览器界面上已经发生变更
   */
  public componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log(`${C03020501A.name}.${this.componentDidUpdate.name}()`);
  }

  public handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  public render() {
    const { count } = this.state;

    return <Button onClick={this.handleClick}>{count}</Button>;
  }
}

function C03020501() {
  return <C03020501A />;
}

export { C03020501 };
