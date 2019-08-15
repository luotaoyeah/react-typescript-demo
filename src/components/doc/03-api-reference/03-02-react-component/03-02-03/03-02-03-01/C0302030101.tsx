/*
 * React.Component
 *     Reference
 *         render()
 */

import React from 'react';
import { Button } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface IState {
  num: number;
}

class C0302030101 extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = { num: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({ num: prevState.num + 1 }));
  }

  /*
   * render() 方法是 class 组件中唯一一个必须实现的方法，它的作用是：当 props 或者 state 变更时，
   * 重新渲染组件，更新 DOM；
   */
  public render(): React.ReactNode {
    const { num } = this.state;
    console.log('render()');
    return (
      <div>
        <Button onClick={this.handleClick}>{num}</Button>
      </div>
    );
  }
}

export { C0302030101 };
