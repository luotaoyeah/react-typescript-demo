/*
 * https://reactjs.org/docs/error-boundaries.html#component-stack-traces
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 在开发环境, 组件中的错误会打印到浏览器的控制台
 */

interface IState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  /*
   * componentDidCatch() 方法的第二个参数中的 React.ErrorInfo.componentStack 属性, 包含发生错误的组件的上下文信息
   */
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true,
      errorMessage: error.message,
    });

    console.log(errorInfo.componentStack);
  }

  public render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Button type="danger">{errorMessage}</Button>;
    }

    return children;
  }
}

function C020402A() {
  throw new Error('SOME ERROR');
  // eslint-disable-next-line no-unreachable
  return <Button>BUTTON</Button>;
}

function C020402() {
  return (
    <ErrorBoundary>
      <C020402A />
    </ErrorBoundary>
  );
}

export { C020402 };
