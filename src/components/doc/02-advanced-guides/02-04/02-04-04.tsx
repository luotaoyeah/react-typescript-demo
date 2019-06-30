/*
 * Error Boundaries: How About Event Handlers?
 */

import * as React from 'react';
import { Button, message } from 'antd';

/*
 * ErrorBoundary 不会捕获事件回调函数中的错误，
 * 因为事件回调函数中的错误，不会影响组件的渲染；
 */
class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true,
    });
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return 'ERROR';
    }
    return this.props.children;
  }
}

class ErrorButton extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render(): React.ReactNode {
    /*
        throw new Error("error in render()");
    */
    return <Button onClick={this.handleClick}>button</Button>;
  }

  private handleClick() {
    /*
     * 事件回调函数中的错误，可以使用 JS 的 try/catch 语句，
     * 捕获错误，并进行处理；
     */
    try {
      message.success('click');
      throw new Error('error in event handler');
    } catch (e) {
      console.log(e.message);
    }
  }
}

class C020404 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
      </div>
    );
  }
}

export { C020404 };
