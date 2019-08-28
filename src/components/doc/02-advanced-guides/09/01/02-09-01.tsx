/*
 * https://reactjs.org/docs/jsx-in-depth.html
 */

import React from 'react';
import { Button, message } from 'antd';

/*
 * JSX 实际上是 React.createElement() 方法的语法糖
 */
class C020901 extends React.Component {
  public constructor(props: {}) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick() {
    message.success('HELLO');
  }

  public render() {
    const button01 = (
      <Button type="primary" onClick={this.handleClick}>
        BUTTON
      </Button>
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const button02 = React.createElement<any>(
      Button,
      {
        type: 'primary',
        onClick: this.handleClick,
      },
      'BUTTON',
    );

    return (
      <>
        {button01} {button02}
      </>
    );
  }
}

export { C020901 };
