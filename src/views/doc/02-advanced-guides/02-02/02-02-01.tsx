/*
 * Code-Splitting
 */

import * as React from "react";

/*
 * 默认情况下，应用会被打包（bundle）到一个文件中；
 * 当应用变大时，应该使用打包工具（如：webpack）提供的 code-splitting 特性，
 * 将应用打包到多个文件中，并按需加载；
 *
 * 实现 code-splitting 的最简单的方法是使用 import() 动态加载；
 */
interface IProps {}

interface IState {}

class C020201 extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    return <div />;
  }
}

export { C020201 };
