/*
 * Conditional Rendering: Inline If-Else with Conditional Operator
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  isLoggedIn: boolean;
}

class C010704 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  public handleLogin() {
    this.setState({
      isLoggedIn: true,
    });
  }

  public handleLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  public render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {/*
         * 在 JSX 中，可以使用（?:）条件操作符，实现 if-else 的效果；
         */}
        {isLoggedIn ? (
          <Button type="danger" onClick={this.handleLogout}>
            退出
          </Button>
        ) : (
          <Button type="primary" onClick={this.handleLogin}>
            登录
          </Button>
        )}
      </div>
    );
  }
}

export { C010704 };
