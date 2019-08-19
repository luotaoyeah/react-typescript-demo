/*
 * https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  isAuthenticated: boolean;
}

class C010704 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  public handleLogin() {
    this.setState({
      isAuthenticated: true,
    });
  }

  public handleLogout() {
    this.setState({
      isAuthenticated: false,
    });
  }

  /*
   * 可以在 JSX 中使用条件表达式, 实现条件渲染
   */
  public render() {
    const { isAuthenticated } = this.state;

    return (
      <div>
        {isAuthenticated ? (
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
