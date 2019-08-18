/*
 * https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down
 */

import React from 'react';

/*
 * 组件遵循单向数据流, 上级组件通过 props 给下级组件传递数据,
 * state 是属于组件内部的状态, 对外界是不可知的,
 * 上级组件和下级组件之间不会在乎对方是 stateful 组件还是 stateless 组件
 */

interface IState {
  name: string;
}

function C010506A({ username }: { username: string }) {
  return <div>{username}</div>;
}

class C010506 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = { name: 'foo' };
  }

  public render() {
    const { name } = this.state;
    return <C010506A username={name} />;
  }
}

export { C010506 };
