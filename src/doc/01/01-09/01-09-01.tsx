/*
 * Forms
 */

import * as React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {}

class C010901 extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return (
      <div>
        <Button type={"primary"}>click</Button>
      </div>
    );
  }
}

export { C010901 };
