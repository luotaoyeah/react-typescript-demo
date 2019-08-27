/*
 * https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 实现了 getDerivedStateFromError() 或者 componentDidCatch() 方法的组件, 称之为 error boundary,
 * error boundary 可以捕获下级组件中的下列错误:
 *   1. constructor() 中的错误
 *   2. render() 方法中的错误
 *   3. lifecycle 方法中的错误
 */

interface IState {
  count: number;
}

class C030210A extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = { count: 1 };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  public render() {
    const { count } = this.state;
    if (count >= 3) {
      throw new Error('ERR');
    }

    return <Button onClick={this.handleClick}>{count}</Button>;
  }
}

class C030210 extends React.Component<{}, { hasError: boolean }> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  /*
   * getDerivedStateFromError() 静态方法, 在下级组件发生错误时调用,
   * 如果返回值不为 null, 则会使用返回的对象去更新 state 数据
   */
  public static getDerivedStateFromError(error: Error): Partial<{ hasError: boolean }> | null {
    console.assert(error.message === 'ERR');

    return {
      hasError: true,
    };
  }

  public render() {
    const { hasError } = this.state;
    if (hasError) {
      return <Button type="danger">ERROR</Button>;
    }

    return <C030210A />;
  }
}

export { C030210 };
