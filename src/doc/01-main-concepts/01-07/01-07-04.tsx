/*
 * Conditional Rendering: Inline If-Else with Conditional Operator
 */

import * as React from "react";
import { Button } from "antd";

interface IProps {}

interface IState {
  isLoggedIn: boolean;
}

class C010704 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        {/*
         * 在 JSX 中，可以使用（?:）条件操作符，实现 if-else 的效果；
         */}
        {this.state.isLoggedIn ? (
          <Button type={"danger"} onClick={this.handleLogout}>
            退出
          </Button>
        ) : (
          <Button type={"primary"} onClick={this.handleLogin}>
            登录
          </Button>
        )}
      </div>
    );
  }
}

export { C010704 };
