/*
 * https://reactjs.org/docs/react-component.html#constructor
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  num: number;
}

/*
 * constructor() 的作用有两个:
 *   1. 初始化 state 数据
 *   2. 绑定方法的 this 对象
 */
class C03020301A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = { num: 1 };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState(prevState => ({ num: prevState.num + 1 }));
  }

  public render() {
    const { num } = this.state;

    return <Button onClick={this.handleClick}>{num}</Button>;
  }
}

function C03020301() {
  return <C03020301A />;
}

export { C03020301 };
