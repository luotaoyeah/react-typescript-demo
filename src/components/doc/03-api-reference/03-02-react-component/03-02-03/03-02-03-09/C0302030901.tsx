/*
 * React.Component
 *     Reference
 *         componentDidCatch()
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

class A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = { count: 0 };
    this.handlelClick = this.handlelClick.bind(this);
  }

  public handlelClick() {
    this.setState((prevState: Readonly<IState>) => ({ count: prevState.count + 1 }));
  }

  public render(): React.ReactNode {
    const { count } = this.state;
    if (count > 5) {
      throw new Error('GREATOR THAN FIVE');
    }
    return <Button onClick={this.handlelClick}>{count}</Button>;
  }
}

class C0302030901 extends React.Component<{}, { hasError: boolean }> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: any): Partial<{ hasError: boolean }> | null {
    return { hasError: true };
  }

  /*
   * componentDidCatch() 方法，会在下级组件发生错误时调用，
   * 主要用来记录错误日志信息；
   * 参数 errorInfo 中记录了发生错误的组件的堆栈信息；
   */
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(errorInfo);
  }

  public render(): React.ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return <Button type="danger">ERROR</Button>;
    }

    return <A />;
  }
}

export { C0302030901 };
