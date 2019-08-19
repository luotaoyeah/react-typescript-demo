/*
 * https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  isAuthenticated: boolean;
}

class C010703 extends React.Component<{}, IState> {
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
   * 因为 true 和 false 在 JSX 中不会被渲染, 因此可以使用逻辑与操作符 && 实现组件的条件渲染,
   *   true && expression  的结果为 expression
   *   false && expression 的结果为 false
   */
  public render() {
    const { isAuthenticated } = this.state;

    return (
      <div>
        {isAuthenticated && (
          <Button type="danger" onClick={this.handleLogout}>
            退出
          </Button>
        )}

        {!isAuthenticated && (
          <Button type="primary" onClick={this.handleLogin}>
            登录
          </Button>
        )}
      </div>
    );
  }
}

export { C010703 };
