/*
 * React.Component
 *     Reference
 *         Class Properties
 *             defaultProps
 */

import React from "react";
import { Button } from "antd";

interface IProps {
  color?: string;
}

interface IState {}

class A extends React.Component<IProps, IState> {
  /*
   * 使用静态属性 defaultProps 声明 props 属性的默认值，
   * 当某个 props 属性没有指定，或者它的值显式地指定为 undefined 时，
   * 就会使用该默认值；
   */
  static defaultProps = { color: "blue" };

  public render(): React.ReactNode {
    return <Button style={{ color: this.props.color }}>{this.props.color}</Button>;
  }
}

class C0302040101 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return <A />;
  }
}

export { C0302040101 };
