/*
 * https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries
 */

import React, { Component } from 'react';
import { Button, Divider } from 'antd';

/*
 * error boundary 是一种特殊的组件,
 * 实现了 componentDidCatch() 实例方法或者 getDerivedStateFromError() 静态方法的 class component 就是一个 error component
 *
 * error boundary 可以捕获下级组件中的如下错误:
 *   1. constructor() 中的错误
 *   2. life cycle 中的错误
 *   3. render() 中的错误
 *
 * error boundary 不能捕获下列错误:
 *   1. error boundary 组件本身的错误(只能捕获下级组件中的错误)
 *   2. 异步代码中的错误
 *   3. 事件回调函数中的错误
 *   4. SSR
 *
 * 通常整个应用程序只会定义一个 error boundary, 用来捕获并处理所有的错误
 */

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  public componentDidCatch(error: Error): void {
    this.setState({
      hasError: true,
    });

    console.log(error.message);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <span
          style={{
            color: 'red',
            border: '1px solid red',
            borderRadius: '3px',
            padding: '10px',
          }}
        >
          ERROR
        </span>
      );
    }

    return children;
  }
}

class C020401A extends Component<{}, { num: number }> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = { num: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    this.setState(prevState => ({
      num: prevState.num + 1,
    }));
  }

  /*
   * render() 中的错误可以被捕获
   */
  public render() {
    const { num } = this.state;

    if (num >= 3) {
      throw new Error('ERROR IN RENDER()');
    }

    return <Button onClick={this.handleClick}>{num}</Button>;
  }
}

function C02040101() {
  return (
    <>
      <ErrorBoundary>
        <C020401A />
      </ErrorBoundary>

      <Divider />
    </>
  );
}

export { C02040101 };
