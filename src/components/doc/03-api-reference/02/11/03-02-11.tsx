/*
 * https://reactjs.org/docs/react-component.html#componentdidcatch
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

class C030211A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = { count: 0 };

    this.handlelClick = this.handlelClick.bind(this);
  }

  public handlelClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  public render() {
    const { count } = this.state;
    if (count >= 3) {
      throw new Error('ERR');
    }

    return <Button onClick={this.handlelClick}>{count}</Button>;
  }
}

class C030211 extends React.Component<{}, { hasError: boolean }> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = { hasError: false };
  }

  /*
   * getDerivedStateFromError() 静态方法, 在下级组件发生错误时调用,
   * 主要用来更新 state 数据, 从而显示错误提示界面
   */
  public static getDerivedStateFromError(error: Error): Partial<{ hasError: boolean }> | null {
    console.assert(error.message === 'ERR');
    return { hasError: true };
  }

  /*
   * componentDidCatch() 方法, 在下级组件发生错误时调用,
   * 主要用来记录错误日志, 不要在该方法中修改 state 数据,
   * 参数 errorInfo 中记录了发生错误的组件的堆栈信息
   */
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.assert(error.message === 'ERR');
    console.log(errorInfo.componentStack);
  }

  public render() {
    const { hasError } = this.state;
    if (hasError) {
      return <Button type="danger">ERROR</Button>;
    }

    return <C030211A />;
  }
}

export { C030211 };
