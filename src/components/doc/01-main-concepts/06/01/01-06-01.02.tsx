/*
 * https://reactjs.org/docs/handling-events.html
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 除了可以把回调函数定义为一个 method, 并在 constructor 中绑定 this 之外,
 * 也可以把回调函数定义为一个 field, 并赋值为一个 arrow function, 这个 arrow function 中的 this 就不需要绑定了
 */

interface IState {
  active: boolean;
}

class C01060102A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      active: false,
    };
  }

  public handleClick = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  };

  public render() {
    const { active } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>{active ? 'ON' : 'OFF'}</Button>
      </div>
    );
  }
}

function C01060102() {
  return <C01060102A></C01060102A>;
}

export { C01060102 };
