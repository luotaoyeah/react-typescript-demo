/*
 * React.Component
 *     Reference
 *         constructor()
 */

import React from "react";
import { Button } from "antd";

interface IProps {
  color?: string;
}

interface IState {}

class A extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    /*
     * 在 constructor() 中初始化 state 时，不要直接使用 props 数据；
     */
    /*
        this.state = { color: props.color };
    */
  }

  public render(): React.ReactNode {
    return <Button>A</Button>;
  }
}

class C0302030203 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export { C0302030203 };
