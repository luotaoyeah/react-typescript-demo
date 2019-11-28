/*
 * Conditional Rendering: Preventing Component from Rendering
 */

import * as React from "react";
import { Alert, Button } from "antd";

interface IProps {}

interface IState {
  visible: boolean;
}

class Info extends React.Component<{ visible: boolean }> {
  public render() {
    /*
     * 如果 render() 方法返回 null，则组件不会渲染内容，
     * 但是组件的声明周期不受影响，比如 componentDidUpdate 依然会正常触发；
     */
    if (!this.props.visible) {
      return null;
    }

    return <Alert message="some information" type="info" />;
  }
}

class C010705 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      visible: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState: Readonly<IState>) => ({
      visible: !prevState.visible,
    }));
  }

  public render() {
    return (
      <div>
        <p>
          <Button onClick={this.handleToggle}>{this.state.visible ? "隐藏" : "显示"}</Button>
        </p>
        <Info visible={this.state.visible} />
      </div>
    );
  }
}

export { C010705 };
