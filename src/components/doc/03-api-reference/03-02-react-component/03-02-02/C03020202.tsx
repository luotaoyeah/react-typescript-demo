/*
 * React.Component
 *     The Component Lifecycle
 *         Updating
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  num: number;
}

/*
 * 触发一个组件的更新（update）有三种方式：
 *     变更 props，
 *     通过 setState() 方法变更 state，
 *     通过 forceUpdate() 方法
 *
 * 在 updating 阶段，react 组件的生命周期包括了下面5个函数的顺序执行：
 *     渲染阶段（Render Phase）：
 *         getDerivedStateFromProps()
 *         shouldComponentUpdate()
 *         render()
 *     提交阶段（Commit Phase）：
 *         getSnapshotBeforeUpdate()
 *         componentDidUpdate()
 *
 * 当调用 forceUpdate() 方法时，shouldComponentUpdate() 函数不会执行；
 */
class C03020202 extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    console.log('constructor');
    super(props, context);
    this.state = { num: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick02 = this.handleClick02.bind(this);
  }

  public static getDerivedStateFromProps(nextProps: Readonly<{}>, prevState: IState) {
    console.log('getDerivedStateFromProps()');
    return null;
  }

  public shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<IState>, nextContext: any): boolean {
    console.log('shouldComponentUpdate()');
    return true;
  }

  public componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log('componentDidUpdate()');
  }

  public getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>): any | null {
    console.log('getSnapshotBeforeUpdate()');
    return null;
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({
      num: prevState.num + 1,
    }));
  }

  public handleClick02() {
    this.forceUpdate();
  }

  public render(): React.ReactNode {
    console.log('render()');
    const { num } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>{num}</Button>
        <Button onClick={this.handleClick02}>forceUpdate()</Button>
      </div>
    );
  }
}

export { C03020202 };
