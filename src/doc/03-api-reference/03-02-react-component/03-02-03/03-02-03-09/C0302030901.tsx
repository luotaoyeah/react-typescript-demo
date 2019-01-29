/*
 * React.Component
 *     Reference
 *         componentDidCatch()
 */

import React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {
  count: number;
}

class A extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = { count: 0 };
    this.handlelClick = this.handlelClick.bind(this);
  }

  handlelClick() {
    this.setState((prevState: Readonly<IState>) => {
      return { count: prevState.count + 1 };
    });
  }

  public render(): React.ReactNode {
    if (this.state.count > 5) {
      throw new Error("GREATOR THAN FIVE");
    }
    return <Button onClick={this.handlelClick}>{this.state.count}</Button>;
  }
}

class C0302030901 extends React.Component<{}, { hasError: boolean }> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(
    error: any
  ): Partial<{ hasError: boolean }> | null {
    return { hasError: true };
  }

  /*
   * componentDidCatch() 方法，会在下级组件发生错误时调用，
   * 主要用来记录错误日志信息；
   * 参数 errorInfo 中记录了发生错误的组件的堆栈信息；
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(errorInfo);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <Button type="danger">ERROR</Button>;
    }

    return <A />;
  }
}

export { C0302030901 };
