/*
 * https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries
 */

import React, { Component } from 'react';
import { Button } from 'antd';

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  /*
   * getDerivedStateFromError() 方法, 返回一个新的 state 数据, 使得组件重新渲染, 从而可以渲染一个错误提示信息
   */
  public static getDerivedStateFromError(): Partial<IState> {
    return {
      hasError: true,
    };
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Button type="danger">ERROR</Button>;
    }

    return children;
  }
}

class C02040102A extends Component {
  /*
   * constructor() 中的错误可以被捕获
   */
  public constructor(props: Readonly<{}>) {
    super(props);

    throw new Error('ERROR IN CONSTRUCTOR()');
  }

  public render() {
    return <Button>BUTTON</Button>;
  }
}

function C02040102() {
  return (
    <>
      <ErrorBoundary>
        <C02040102A />
      </ErrorBoundary>
    </>
  );
}

export { C02040102 };
