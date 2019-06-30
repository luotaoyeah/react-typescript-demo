/*
 * Error Boundaries: componentDidCatch Parameters
 */

import * as React from 'react';
import { Button } from 'antd';

class ErrorBoundary extends React.Component<{}, { hasError: boolean; errorMessage: string }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
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

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <Button type={'danger'}>{this.state.errorMessage}</Button>;
    }

    return this.props.children;
  }
}

class ErrorButton extends React.Component {
  public render(): React.ReactNode {
    throw new Error('some error');
    return '';
  }
}

class C020402 extends React.Component {
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

export { C020402 };
