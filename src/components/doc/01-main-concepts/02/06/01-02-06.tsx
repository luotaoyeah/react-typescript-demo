/*
 * https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks
 */

import React, { ChangeEvent, Component, ReactNode } from 'react';
import { Button, Input } from 'antd';

interface IState {
  message: string;
}

export class C010206 extends Component<{}, IState> {
  public constructor(props: {}, context: {}) {
    super(props, context);
    this.state = {
      message: "<script>{ alert('hello') }</script>",
    };
  }

  public render(): ReactNode {
    const { message } = this.state;

    return (
      <div>
        {/*
           默认情况下, JSX 中嵌入的表达式, 都会被 ReactDOM 转义之后再进行渲染, 避免发生 XSS 攻击
         */}

        <p>
          <Input
            value={message}
            onChange={(value: ChangeEvent<HTMLInputElement>): void => {
              this.setState({
                message: value.target.value,
              });
            }}
          />
        </p>

        <Button>{message}</Button>
      </div>
    );
  }
}
