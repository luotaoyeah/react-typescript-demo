/*
 * https://reactjs.org/docs/conditional-rendering.html#element-variables
 */

import React from 'react';
import { Button } from 'antd';

function C010702A({ onClick }: { onClick: () => void }) {
  return (
    <Button type="primary" onClick={onClick}>
      登录
    </Button>
  );
}

function C010702B({ onClick }: { onClick: () => void }) {
  return (
    <Button type="danger" onClick={onClick}>
      退出
    </Button>
  );
}

interface IState {
  logged: boolean;
}

class C010702 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      logged: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  public handleLogin() {
    this.setState({ logged: true });
  }

  public handleLogout() {
    this.setState({ logged: false });
  }

  /*
   * 可以将一个 react element 存储到一个 variable 中, 然后在 JSX 中渲染该 variable,
   */
  public render() {
    const { logged } = this.state;
    const button = !logged ? <C010702A onClick={this.handleLogin} /> : <C010702B onClick={this.handleLogout} />;

    return <div>{button}</div>;
  }
}

export { C010702 };
