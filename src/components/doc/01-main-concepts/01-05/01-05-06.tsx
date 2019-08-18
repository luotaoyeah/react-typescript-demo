/*
 * State and Lifecycle: The Data Flows Down
 */

import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface IState {
  name: string;
}

/*
 * class 组件拥有 state，functional 组件没有 state，
 * state 只能被组件自身访问，外界不关心组件是有状态的（class 组件），
 * 还是无状态的（functional 组件）；
 *
 * 在 class 组件中可以使用 functional 组件，
 * 在 functional 组件中也可以使用 class 组件；
 *
 * 组件的 state 可以传递给子组件的 props；
 *
 * 简单来讲，组件遵循的是单向数据流，或者叫自上而下的数据流；
 */

function C010506A({ username }: { username: string }) {
  return <i>{username}</i>;
}

class C010506 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = { name: 'foo' };
  }

  public render() {
    const { name } = this.state;
    return (
      <div>
        <C010506A username={name} />
      </div>
    );
  }
}

export { C010506 };
