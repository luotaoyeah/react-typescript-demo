/*
 * https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  bar: number;
}

class C030209A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      bar: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: string): void {
    console.assert(snapshot === 'FOO');
  }

  /*
   * render() 方法执行之后并不会马上更新 DOM, 而是会先执行 getSnapshotBeforeUpdate() 方法, 相关的几个操作的执行顺序为:
   *   1. render()
   *   2. getSnapshotBeforeUpdate()
   *   3. 更新 DOM
   *   4. componentDidUpdate()
   *
   * 因此, 在 getSnapshotBeforeUpdate() 方法中可以获取更新之前的 DOM 信息, 并将该方法的返回值作为 componentDidUpdate() 方法的第三个参数,
   * 这样就可以实现: 在更新 DOM 之后可以恢复之前的某些 DOM 状态, 比如滚动条的位置
   */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>): string | null {
    return 'FOO';
  }

  public handleClick() {
    this.setState(prevState => ({
      bar: prevState.bar + 1,
    }));
  }

  public render() {
    const { bar } = this.state;

    return <Button onClick={this.handleClick}>{bar}</Button>;
  }
}

function C030209() {
  return <C030209A />;
}

export { C030209 };
