/*
 * React.Component
 *     Reference
 *         componentDidUpdate()
 *             getSnapshotBeforeUpdate()
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

class A extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log(snapshot);
  }

  /*
   * getSnapshotBeforeUpdate() 处于 pre-commit phase，
   * 即，在 render() 执行之后，在更新 DOM 之前执行；
   * 如果组件实现了该方法，则其返回值会作为 componentDidUpdate() 方法的第三个参数；
   */
  public getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>): any | null {
    console.log('getSnapshotBeforeUpdate()');
    return { foo: 'foo' };
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({ count: prevState.count + 1 }));
  }

  public render() {
    const { count } = this.state;
    return <Button onClick={this.handleClick}>{count}</Button>;
  }
}

function C0302030402() {
  return <A />;
}

export { C0302030402 };
