/*
 * https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
 */

import React from 'react';
import { Button } from 'antd';

interface IProps {
  foo: number;
}

interface IState {
  bar: number;
}

class C030208A extends React.Component<IProps, IState> {
  public constructor(props: Readonly<IProps>) {
    super(props);

    this.state = {
      bar: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * getDerivedStateFromProps() 静态方法, 会在每次 render() 方法执行之前执行, 包括首次加载,
   * 如果返回的对象不为 null, 则会使用返回的对象去更新 state 数据,
   * 由于 render() 方法执行的原因有两个:
   *   1. props 变更
   *   2. state 变更
   * 也就是说, getDerivedStateFromProps() 方法会在 props 或者 state 变更之后, 在 render() 执行之前, 再次更新 state 数据
   */
  public static getDerivedStateFromProps(nextProps: Readonly<{}>, prevState: IState): Partial<IState> | null {
    return { bar: prevState.bar + 1 };
  }

  public handleClick() {
    this.setState(prevState => ({
      bar: prevState.bar + 1,
    }));
  }

  public render() {
    const { bar } = this.state;
    const { foo } = this.props;

    return (
      <>
        <Button type="primary" style={{ marginRight: '10px' }} onClick={this.handleClick}>
          CHANGE STATE
        </Button>

        <Button style={{ marginRight: '10px' }}>{foo}</Button>
        <Button style={{ marginRight: '10px' }}>{bar}</Button>
      </>
    );
  }
}

class C030208 extends React.Component<{}, { foo: number }> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = { foo: 1 };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    this.setState(prevState => ({
      foo: prevState.foo + 1,
    }));
  }

  public render() {
    const { foo } = this.state;

    return (
      <>
        <Button type="danger" style={{ marginRight: '10px' }} onClick={this.handleClick}>
          CHANGE PROPS
        </Button>

        <C030208A foo={foo} />
      </>
    );
  }
}

export { C030208 };
