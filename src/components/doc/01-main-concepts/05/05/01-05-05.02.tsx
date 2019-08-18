/*
 * https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

// eslint-disable-next-line react/prefer-stateless-function
class C01050502 extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      count: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    /*
     * setState() 方法可能会异步执行, 也就是说调用之后并不一定会立即更新 state 数据,
     * 如果本次更新的值依赖于上次的值, 则需要使用函数参数的形式来调用 setState() 方法
     */
    this.setState((prevState: Readonly<IState>) => ({
      count: prevState.count + 1,
    }));
  }

  public render() {
    const { count } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>{count}</Button>
      </div>
    );
  }
}

export { C01050502 };
