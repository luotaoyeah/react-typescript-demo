/*
 * React.Component
 *     Reference
 *         render()
 */

import React from "react";
import { Button, Divider } from "antd";

interface IProps {}

interface IState {}

class A extends React.Component {
  public render() {
    /*
     * render() 可以返回多个 react elements 组成的数组；
     */
    return [<Button key={1}>A</Button>, <Divider key={2} />, <Button key={3}>A</Button>];
  }
}

class B extends React.Component {
  public render() {
    /*
     * render() 可以返回一个 React.Fragment，
     * 注意 React.Fragment 和 react elements 数组的区别；
     */
    return (
      <React.Fragment>
        <Button>B</Button>
        <Divider />
        <Button>B</Button>
      </React.Fragment>
    );
  }
}

class C0302030103 extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        <A />
        <hr />
        <B />
      </div>
    );
  }
}

export { C0302030103 };
