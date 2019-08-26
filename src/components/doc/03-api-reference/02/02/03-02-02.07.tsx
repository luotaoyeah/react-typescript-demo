/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  num: number;
}

/*
 * 如果 shouldComponentUpdate() 返回 false, 则 render() 方法不会执行
 */
class C03020207A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      num: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<IState>): boolean {
    return nextState.num % 3 === 0;
  }

  public handleClick() {
    this.setState(prevState => ({ num: prevState.num + 1 }));
  }

  public render() {
    console.log(`${C03020207A.name}.render()`);

    const { num } = this.state;

    return <Button onClick={this.handleClick}>{num}</Button>;
  }
}

function C03020207() {
  return <C03020207A />;
}

export { C03020207 };
