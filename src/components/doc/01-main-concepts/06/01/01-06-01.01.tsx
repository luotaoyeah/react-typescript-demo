/*
 * https://reactjs.org/docs/handling-events.html
 */

import React from 'react';
import { Button } from 'antd';

/*
 * react 中的事件处理, 实际上是一种特殊的 props,
 * 下级组件将某个 props 属性定义为一个 function 类型, 上级组件传递一个 function 对象进来, 称之为该事件的回调函数,
 * 当下级组件需要触发这个事件时, 就调用这个回调函数
 */

interface IState {
  active: boolean;
}

class C01060101A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      active: false,
    };

    /*
     * 当直接把一个 method 传递给下级组件的 props 时, 这个 method 中的 this 为 undefined,
     * 因此需要在 constructor 中手动绑定 this
     */
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  }

  public render() {
    const { active } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>{active ? 'ON' : 'OFF'}</Button>
      </div>
    );
  }
}

function C01060101() {
  return <C01060101A></C01060101A>;
}

export { C01060101 };
