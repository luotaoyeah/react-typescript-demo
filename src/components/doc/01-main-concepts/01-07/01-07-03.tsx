/*
 * Conditional Rendering: Inline If with Logical && Operator
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  isLoggedIn: boolean;
}

class C010703 extends React.Component<{}, IState> {
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

  public render(): React.ReactNode {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {/*
         * 可以使用逻辑与操作符 && 实现组件的条件渲染
         */}
        {isLoggedIn && (
          <Button type="danger" onClick={this.handleLogout}>
            退出
          </Button>
        )}
        {!isLoggedIn && (
          <Button type="primary" onClick={this.handleLogin}>
            登录
          </Button>
        )}
      </div>
    );
  }
}

export { C010703 };
