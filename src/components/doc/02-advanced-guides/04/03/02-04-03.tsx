/*
 * https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  hasError: boolean;
  errorMessage: string;
}

class C020403A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * error boundary 不会捕获 event handler 中的错误, 因为 event handler 中的错误不会影响渲染,
   * 在 event handler 中可以直接使用 try/catch 来捕获并处理错误
   */
  private handleClick() {
    try {
      throw new Error('ERROR IN EVENT HANDLER');
    } catch (e) {
      this.setState({
        hasError: true,
        errorMessage: e.message,
      });
    }
  }

  public render() {
    const { hasError, errorMessage } = this.state;

    if (hasError) {
      return <Button type="danger">{errorMessage}</Button>;
    }

    return <Button onClick={this.handleClick}>BUTTON</Button>;
  }
}

function C020403() {
  return <C020403A />;
}

export { C020403 };
