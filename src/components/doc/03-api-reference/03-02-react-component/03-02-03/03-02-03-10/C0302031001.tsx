/*
 * React.Component
 *     Reference
 *         setState()
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

class A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  public componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log('componentDidUpdate()', prevState.count);
  }

  public handleClick() {
    /*
     * setState() 方法，用于更新组件的 state 对象，并触发组件的重新渲染；
     * setState() 方法的第一个参数，可以接受一个对象，
     * 这种方式的 setState() 是 asynchronous 的，连续多次调用会被合并为一次更新；
     */
    this.setState({ count: 1 });
    this.setState({ count: 2 });
    this.setState({ count: 3 });

    /*
     * 调用 setState() 之后，并不一定会立即更新，
     * 如果需要依赖更新之后的状态，
     *     可以使用第二个参数：回调函数
     *         回调函数会在本次 setState() 执行完毕，并且组件完成重新渲染之后执行；
     *     也可以使用 componentDidUpdate()（推荐）；
     */
    this.setState({ count: 4 }, () => {
      const { count } = this.state;
      console.log('setState()', count); // 4
    });

    /*
     * setState() 方法的第一个参数，可以接收一个函数，
     * 当本次更新需要依赖上次更新之后的 state 时，需要使用这种方式；
     */
    this.setState((prevState: Readonly<IState>) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState: Readonly<IState>) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState: Readonly<IState>) => ({
      count: prevState.count + 1,
    }));
  }

  public render(): React.ReactNode {
    const { count } = this.state;
    console.log('render()', count);
    return <Button onClick={this.handleClick}>{count}</Button>;
  }
}

function C0302031001(): React.ReactNode {
  return <A />;
}

export { C0302031001 };
