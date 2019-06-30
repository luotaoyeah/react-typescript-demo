/*
 * React.Component
 *     Reference
 *         getDerivedStateFromProps()
 */

import React from 'react';
import { Button } from 'antd';

interface IProps {}

interface IState {
  count: number;
  color: string;
}

class A extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
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
  static getDerivedStateFromProps(nextProps: Readonly<IProps>, prevState: IState) {
    if (prevState.count % 2 === 0) {
      return { color: 'red' };
    } else {
      return { color: 'black' };
    }
  }

  handleClick() {
    const vm = this;

    vm.setState((prevState: Readonly<IState>, props: Readonly<IProps>) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  public render(): React.ReactNode {
    return (
      <Button onClick={this.handleClick} style={{ color: this.state.color }}>
        {this.state.count}
      </Button>
    );
  }
}

class C0302030701 extends React.Component {
  public render(): React.ReactNode {
    return <A />;
  }
}

export { C0302030701 };
