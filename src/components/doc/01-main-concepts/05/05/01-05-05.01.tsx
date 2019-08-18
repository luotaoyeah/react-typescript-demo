/*
 * https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  date: string;
}

// eslint-disable-next-line react/prefer-stateless-function
class C01050501 extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    /*
     * 除了在 constructor 中可以直接对 state 进行赋值之外,
     * 在其他地方, 都需要使用 setState() 方法来修改 state 中的数据
     */
    this.state = {
      date: new Date().toISOString(),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    this.setState({ date: new Date().toISOString() });
  }

  public render() {
    const { date } = this.state;
    return <Button onClick={this.handleClick}>{date}</Button>;
  }
}

export { C01050501 };
