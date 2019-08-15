/*
 * React.Component
 *     Reference
 *         getDerivedStateFromError()
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

/*
 * 实现了 getDerivedStateFromError() 或者 componentDidCatch() 方法的组件，
 * 称之为 Error Boundary；
 * Error Boundary 可以捕获下级组件的下列错误：
 *     render() 方法中的错误，
 *     lifecycle 方法中的错误，
 *     constructor() 中的错误；
 */
class A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>) => ({ count: prevState.count + 1 }));
  }

  public render(): React.ReactNode {
    const { count } = this.state;
    if (count > 5) {
      throw new Error('GREATER THAN FIVE');
    }

    return <Button onClick={this.handleClick}>{count}</Button>;
  }
}

class C0302030801 extends React.Component<{}, { hasError: boolean }> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  /*
   * getDerivedStateFromError() 静态方法，在下级组件发生错误时调用，
   * 如果返回值不为 null，则会使用返回的对象去更新 state 对象；
   */
  public static getDerivedStateFromError(error: any): Partial<{ hasError: boolean }> | null {
    return {
      hasError: true,
    };
  }

  public render(): React.ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return <Button type="danger">ERROR</Button>;
    }

    return <A />;
  }
}

export { C0302030801 };
