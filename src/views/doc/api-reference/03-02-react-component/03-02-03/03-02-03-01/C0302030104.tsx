/*
 * React.Component
 *     Reference
 *         render()
 */

import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

class A extends React.Component {
  /*
   * render() 方法可以返回一个 React.ReactPortal；
   */
  public render(): React.ReactPortal {
    return ReactDOM.createPortal(<Button>portal</Button>, document.getElementById("root02")!);
  }
}

interface IProps {}

interface IState {}

class C0302030104 extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export { C0302030104 };
