/*
 * https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers
 */

import { Button, message } from 'antd';
import React from 'react';

class C010602 extends React.Component {
  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  public handleClick(foo: string, e: React.MouseEvent) {
    message.info(foo);
  }

  /*
   * 如果需要给回调函数传递额外的参数, 有两种方式:
   *   1. 在 JSX 中调用 bind() 方法, 传入额外的参数
   *   2. 使用一个 anonymous function 作为回调函数, 并在函数里面调用真正的回调函数, 同时传入额外的参数
   */
  public render() {
    return (
      <div>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button onClick={this.handleClick.bind(this, 'FOO')}>CLICK</Button>

        <Button
          onClick={e => {
            this.handleClick('FOO', e);
          }}
        >
          CLICK
        </Button>
      </div>
    );
  }
}

export { C010602 };
