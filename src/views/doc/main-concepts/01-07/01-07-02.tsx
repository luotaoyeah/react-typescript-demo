/*
 * Conditional Rendering: Element Variables
 */

import * as React from "react";
import { Button } from "antd";

class LoginButton extends React.Component<{ onClick: () => void }> {
  public render() {
    /*
     * 通过 props 传入事件回调函数
     */
    return (
      <Button type={"primary"} onClick={this.props.onClick}>
        登录
      </Button>
    );
  }
}

class LogoutButton extends React.Component<{ onClick: () => void }> {
  public render() {
    return (
      <Button type={"danger"} onClick={this.props.onClick}>
        退出
      </Button>
    );
  }
}

interface IProps {}

interface IState {
  isLoggedIn: boolean;
}

class C010702 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  public render(): React.ReactNode {
    /*
     * 将 react 元素存储到变量中，根据不同的状态，
     * 渲染不同的组件；
     */
    const button = !this.state.isLoggedIn ? (
      <LoginButton onClick={this.handleLogin} />
    ) : (
      <LogoutButton onClick={this.handleLogout} />
    );

    return <div>{button}</div>;
  }
}

export { C010702 };
