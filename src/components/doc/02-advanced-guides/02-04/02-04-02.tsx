/*
 * Error Boundaries: componentDidCatch Parameters
 */

import React from 'react';
import { Button } from 'antd';

class ErrorBoundary extends React.Component<{}, { hasError: boolean; errorMessage: string }> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true,
      errorMessage: error.message,
    });

    /*
     * React.ErrorInfo.componentStack 属性，
     * 包含发生错误时的组件上下文信息；
     */
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

class ErrorButton extends React.Component {
  public render() {
    throw new Error('some error');
    // eslint-disable-next-line no-unreachable
    return '';
  }
}

function C020402(): React.ReactNode {
  return (
    <div>
      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>
    </div>
  );
}

export { C020402 };
