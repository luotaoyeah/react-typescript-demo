/*
 * React.Component
 *     Reference
 *         getDerivedStateFromProps()
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
  color: string;
}

class A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      count: 0,
      color: 'black',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * getDerivedStateFromProps() 静态方法，会在每次 render() 方法执行之前执行，
   * 包括首次加载，如果返回的对象不为 null，则会使用返回的对象去更新 state 对象；
   */
  public static getDerivedStateFromProps(nextProps: Readonly<{}>, prevState: IState) {
    if (prevState.count % 2 === 0) {
      return { color: 'red' };
    }
    return { color: 'black' };
  }

  public handleClick() {
    const vm = this;

    vm.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({
      count: prevState.count + 1,
    }));
  }

  public render() {
    const { count, color } = this.state;
    return (
      <Button onClick={this.handleClick} style={{ color }}>
        {count}
      </Button>
    );
  }
}

function C0302030701() {
  return <A />;
}

export { C0302030701 };
