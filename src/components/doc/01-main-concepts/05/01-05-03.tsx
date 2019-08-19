/*
 * https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
 */

import React from 'react';

interface IState {
  date: Date;
}

class C010503A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    /*
     * 在 constructor 中通过直接赋值的方式, 设置 state 的初始值
     */
    this.state = {
      date: new Date(),
    };
  }

  public render() {
    const { date } = this.state;
    return <div>{date.toISOString()}</div>;
  }
}

function C010503() {
  return <C010503A />;
}

export { C010503 };
