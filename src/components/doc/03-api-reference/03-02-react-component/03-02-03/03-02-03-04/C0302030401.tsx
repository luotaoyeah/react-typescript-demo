/*
 * React.Component
 *     Reference
 *         componentDidUpdate()
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

/*
 * 当组件发生更新时，会调用 componentDidUpdate() 方法，
 * 此时，DOM已经完成更新；
 */
class A extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  public componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log('componentDidUpdate()');
    /*
     * 通常可以在 componentDidUpdate() 中请求后台数据，
     * 但是通常需要先检查 props 是否有变更；
     */
  }

  public handleClick() {
    const vm = this;

    vm.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({
      count: prevState.count + 1,
    }));
  }

  public render() {
    const { count } = this.state;
    return <Button onClick={this.handleClick}>{count}</Button>;
  }
}

function C0302030401(): React.ReactNode {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030401 };
