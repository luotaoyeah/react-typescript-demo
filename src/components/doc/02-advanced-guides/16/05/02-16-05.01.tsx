/*
 * https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
 */

import React from 'react';
import { Button, Input } from 'antd';

/*
 * 除了可以直接将一个 React.RefObject 绑定到 ref 属性之外,
 * 还可以将一个回调函数绑定到 ref 属性, 回调函数的参数就是组件实例或者 DOM 对象
 */
class C02160501 extends React.Component {
  private ref01: Input | null = null;

  public constructor(props: {}) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    if (this.ref01) {
      this.ref01.focus();
    }
  }

  public render() {
    return (
      <div>
        <Input
          ref={(obj: Input) => {
            this.ref01 = obj;
          }}
        />

        <Button onClick={this.handleClick}>FOCUS</Button>
      </div>
    );
  }
}

export { C02160501 };
