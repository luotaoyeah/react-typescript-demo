/*
 * React.Component
 *     Reference
 *         Class Properties
 *             displayName
 */

import React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {}

class A extends React.Component<IProps, IState> {
  /*
   * 静态属性 displayName 主要用来方便调试，
   * 如果指定了该属性，则在 devtools 中显示的就是该属性；
   */
  static displayName = "A-A-A";

  render(): React.ReactNode {
    const MyButton = (C => {
      return class extends React.Component {
        /*
         * 在 HOC 中通常需要指定 displayName 属性
         */
        static displayName = `MyButton(${C.name})`;

        render(): React.ReactNode {
          return <C {...this.props} style={{ color: "red" }} />;
        }
      };
    })(Button);

    return <MyButton>A</MyButton>;
  }
}

class C0302040201 extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return <A />;
  }
}

export { C0302040201 };
