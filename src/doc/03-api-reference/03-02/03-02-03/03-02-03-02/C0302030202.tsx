/*
 * React.Component
 *     Reference
 *         constructor()
 */

import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

interface IProps {}

interface IState {
  num: number;
}

class A extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    /*
     * 在 constructor() 中不要引入 side-effects 和 subscribtion，
     * 应该在 componentDidMount() 中引入；
     * 因为 constructor() 会在组件 mount 之前执行；
     */
  }

  componentDidMount(): void {
    const button = ReactDOM.findDOMNode(this);
    if (button) {
      (button as HTMLButtonElement).style.color = "red";
    }
  }

  render(): React.ReactNode {
    return <Button>A</Button>;
  }
}

class C0302030202 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export { C0302030202 };
