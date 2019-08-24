/*
 * https://reactjs.org/docs/profiler.html#usage
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  num: number;
}

class C021101A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      num: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    this.setState(prevState => ({
      num: prevState.num + 1,
    }));
  }

  public render() {
    const { num } = this.state;

    return <Button onClick={this.handleClick}>{num}</Button>;
  }
}

function C021201() {
  return <C021101A></C021101A>;
}

export { C021201 };
