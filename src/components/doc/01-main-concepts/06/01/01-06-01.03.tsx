/*
 * https://reactjs.org/docs/handling-events.html
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  active: boolean;
}

class C01060103A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      active: false,
    };
  }

  /*
   * 可以将一个 anonymous function 作为回调函数传递,
   * 这种方式的缺点是: 每次渲染都会重新创建一个新的 anonymous function 对象
   */
  public render() {
    const { active } = this.state;
    return (
      <div>
        <Button
          onClick={() => {
            this.setState(prevState => ({
              active: !prevState.active,
            }));
          }}
        >
          {active ? 'ON' : 'OFF'}
        </Button>
      </div>
    );
  }
}

function C01060103() {
  return <C01060103A></C01060103A>;
}

export { C01060103 };
