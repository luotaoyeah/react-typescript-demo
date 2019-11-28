/*
 * React Top-Level API
 *     Overview
 */

import React from "react";

/*
 * React 中的组件有两类：
 *     React.Component
 *     React.PureComponent
 *
 * 创建 React 元素三种方式：
 *     JSX
 *     React.createElement()
 *     React.createFactory()
 *
 * 用于转换元素的API：
 *     React.cloneElement()
 *     React.isValidElement()
 *     React.Children
 *
 * 不使用容器元素，渲染多个元素的方法：
 *     React.Fragment
 *
 * ref 相关的API：
 *     React.createRef()
 *     React.forwardRef()
 */

interface IProps {}

interface IState {}

class C030101 extends React.Component<IProps, IState> {
  public render() {
    return <div />;
  }
}

export { C030101 };
