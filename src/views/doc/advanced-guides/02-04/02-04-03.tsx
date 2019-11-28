/*
 * Error Boundaries: Component Stack Traces
 */

import * as React from "react";

/*
 * ErrorBoundary 使得应用中的某一部分崩溃之后，不会影响到其他的部分；
 */

/*
 * JS 中的 try/catch 语句用于命令式（imperative）的代码，
 * 而 JSX 是声明式（declarative）的代码，
 * ErrorBoundary 在组件中的作用，
 * 类似于 try/catch 在 JS 代码中的作用；
 */
class C020403 extends React.Component {
  public render() {
    /*
     * 在开发环境中，组件中的错误会打印到浏览器控制台：
     *
     * The above error occurred in the <C020403> component:
     *     in C020403 (created by App)
     *     in div (created by App)
     *     in App
     */
    throw new Error("some error");
    return <div />;
  }
}

export { C020403 };
