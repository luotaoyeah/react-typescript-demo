/*
 * React.Component
 *     Reference
 *         render()
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  num: number;
}

class A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      num: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<IState>, nextContext: any): boolean {
    /*
     * 如果 shouldComponentUpdate() 返回 false，则 render() 方法不会执行；
     */
    if (nextState.num % 2 === 0) {
      return false;
    }

    return true;
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({ num: prevState.num + 1 }));
  }

  public render() {
    const { num } = this.state;
    console.log('render()');
    return <Button onClick={this.handleClick}>{num}</Button>;
  }
}

function C0302030107() {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030107 };
