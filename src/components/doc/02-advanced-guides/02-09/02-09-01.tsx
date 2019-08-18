/*
 * JSX In Depth
 */

import React from 'react';
import { Button, Divider, message } from 'antd';

/*
 * JSX 实际上只是 React.createElement() 方法的语法糖；
 */
class C020901 extends React.Component {
  public constructor(props: any, context: any) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick() {
    message.success('hello');
  }

  public render() {
    const button01 = (
      <Button type="primary" onClick={this.handleClick}>
        button
      </Button>
    );

    const button02 = React.createElement(
      Button as any,
      {
        type: 'primary',
        onClick: this.handleClick,
      },
      'button',
    );

    return (
      <div>
        {button01}
        <Divider />
        {button02}
      </div>
    );
  }
}

export { C020901 };
