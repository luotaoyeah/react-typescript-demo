/*
 * Error Boundaries: Introducing Error Boundaries
 */

import * as React from "react";
import { Button } from "antd";

/*
 * 在 React@16.x 之前，组件中的一个 JS 错误会导致整个应用崩溃，
 * 因此在 React@16 中，引入了错误边界（ErrorBoundary）的概念；
 * 可以把 ErrorBoundary 看做跟 try/catch 类似的东西，
 * 只是 ErrorBoundary 是针对组件的错误处理机制，
 * 而 try/catch 是针对 JS 代码的错误处理机制；
 */

/*
 * ErrorBoundary 是一种特殊的组件，
 * 它可以捕获它的下级组件中的错误，
 * 这些错误包括：
 *     render() 方法中的错误；
 *     声明周期函数中的错误；
 *     构造函数中的错误；
 * 下面这些错误不能被捕获到：
 *     事件处理函数中的错误；
 *     异步代码中的错误；
 *     SSR；
 *     ErrorBoundary 本身抛出的错误；
 *
 * 在捕获到错误的时候，ErrorBoundary 可以渲染一个专门的错误提示组件，
 * 提示错误消息，不会让整个应用崩溃；
 */

/*
 * 如何定义一个 ErrorBoundary ？
 * 在一个组件中实现了 componentDidCatch() 声明周期方法，
 * 则该组件就是一个 ErrorBoundary 组件；
 */

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true
    });

    console.log(error.message);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <span style={{ color: "red" }}>ERROR</span>;
    }

    return this.props.children;
  }
}

class ButtonError extends React.Component {
  render(): React.ReactNode {
    throw new Error("some error from within render()");
    return <Button>button</Button>;
  }
}

class C020401 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <ErrorBoundary>
          <ButtonError />
        </ErrorBoundary>
      </div>
    );
  }
}

export { C020401 };
