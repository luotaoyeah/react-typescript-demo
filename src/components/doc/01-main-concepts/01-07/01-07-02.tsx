/*
 * Conditional Rendering: Element Variables
 */

import React from 'react';
import { Button } from 'antd';

function LoginButton(props: { onClick: () => void }) {
  /*
   * 通过 props 传入事件回调函数
   */
  const { onClick } = props;
  return (
    <Button type="primary" onClick={onClick}>
      登录
    </Button>
  );
}

function LogoutButton(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <Button type="danger" onClick={onClick}>
      退出
    </Button>
  );
}

interface IState {
  isLoggedIn: boolean;
}

class C010702 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  public handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  public handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  public render(): React.ReactNode {
    /*
     * 将 react 元素存储到变量中，根据不同的状态，
     * 渲染不同的组件；
     */
    const { isLoggedIn } = this.state;
    const button = !isLoggedIn ? (
      <LoginButton onClick={this.handleLogin} />
    ) : (
      <LogoutButton onClick={this.handleLogout} />
    );

    return <div>{button}</div>;
  }
}

export { C010702 };
