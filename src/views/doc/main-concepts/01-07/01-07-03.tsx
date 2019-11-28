/*
 * Conditional Rendering: Inline If with Logical && Operator
 */

import * as React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {
  isLoggedIn: boolean;
}

class C010703 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  public render(): React.ReactNode {
    return (
      <div>
        {/*
         * 可以使用逻辑与操作符 && 实现组件的条件渲染
         */}
        {this.state.isLoggedIn && (
          <Button type={"danger"} onClick={this.handleLogout}>
            退出
          </Button>
        )}
        {!this.state.isLoggedIn && (
          <Button type={"primary"} onClick={this.handleLogin}>
            登录
          </Button>
        )}
      </div>
    );
  }
}

export { C010703 };
