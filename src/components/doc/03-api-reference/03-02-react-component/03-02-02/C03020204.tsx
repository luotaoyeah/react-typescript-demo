/*
 * React.Component
 *     The Component Lifecycle
 *         Error Handling
 */

import React from 'react';

class A extends React.Component {
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('A:', error.message);
  }

  public render(): React.ReactNode {
    throw new Error('A.render()');
    // eslint-disable-next-line no-unreachable
    return <div></div>;
  }
}

class B extends React.Component {
  public componentDidMount(): void {
    throw new Error('B.componentDidMouont()');
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('B:', error.message);
  }

  public render(): React.ReactNode {
    return 'B';
  }
}

class C extends React.Component {
  public constructor(props: any, context: any) {
    super(props, context);
    throw new Error('C.public constructor()');
  }

  public render(): React.ReactNode {
    return 'C';
  }
}

/*
 * 如果组件实现了 componentDidCatch() 生命周期函数，则该组件是一个 ErrorBoundary，
 * componentDidCatch() 会捕获下面这些错误：
 *     1. 组件 render() 方法中的错误，
 *     2. 组件生命周期函数中的错误，
 *     3. 子组件的构造函数中的错误；
 */
class C03020204 extends React.Component<{}, {}> {
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('C03020204:', error.message);
  }

  public render(): React.ReactNode {
    return (
      <div>
        <A />
        <B />
        <C />
      </div>
    );
  }
}

export { C03020204 };
