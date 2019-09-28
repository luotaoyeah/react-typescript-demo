/*
 * React.Component
 *     The Component Lifecycle
 *         Error Handling
 */

import React from "react";

class A extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("A:", error.message);
  }

  public render(): React.ReactNode {
    throw new Error("A.render()");
  }
}

class B extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("B:", error.message);
  }

  componentDidMount(): void {
    throw new Error("B.componentDidMouont()");
  }

  public render(): React.ReactNode {
    return "B";
  }
}

class C extends React.Component {
  constructor(props: any, context: any) {
    super(props, context);
    throw new Error("C.constructor()");
  }

  public render(): React.ReactNode {
    return "C";
  }
}

interface IProps {}

interface IState {}

/*
 * 如果组件实现了 componentDidCatch() 生命周期函数，则该组件是一个 ErrorBoundary，
 * componentDidCatch() 会捕获下面这些错误：
 *     1. 组件 render() 方法中的错误，
 *     2. 组件生命周期函数中的错误，
 *     3. 子组件的构造函数中的错误；
 */
class C03020204 extends React.Component<IProps, IState> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("C03020204:", error.message);
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
