/*
 * React.Component
 *     Reference
 *         constructor()
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  num: number;
}

/*
 * 下面两种情况下需要实现 constructor() 构造函数：
 *     1. 需要初始化 state 数据；
 *     2. 需要绑定方法的 this；
 */
class A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    /*
     * constructor() 中必须调用 super(props)，否则 this.props 将为 undefined；
     */
    super(props);

    /*
     * 在 constructor() 中主要做两件事情：
     *     1. 初始化 state 数据，通过直接给 this.state 赋值的方式；
     *            constructor() 中是唯一可以直接给 this.state 赋值的地方，
     *            在其他地方，必须通过 setState() 方法修改 state 的数据；
     *     2. 绑定方法的 this；
     */
    this.state = { num: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({ num: prevState.num + 1 }));
  }

  public render() {
    const { num } = this.state;
    return <Button onClick={this.handleClick}>{num}</Button>;
  }
}

function C0302030201(): React.ReactNode {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030201 };
