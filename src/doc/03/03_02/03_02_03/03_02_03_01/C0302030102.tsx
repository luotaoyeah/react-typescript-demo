/*
 * React.Component
 *     Reference
 *         render()
 */

import React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {}

/*
 * render() 可以返回一个 react element，可以是 DOM 节点或者组件；
 */
class C0302030102 extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return <Button>button</Button>;
  }
}

export { C0302030102 };
