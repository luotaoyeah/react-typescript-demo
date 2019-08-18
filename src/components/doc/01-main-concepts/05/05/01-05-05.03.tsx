/*
 * https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged
 */

import React from 'react';
import { Button } from 'antd';

interface IState {
  foo: string;
  bar: {
    baz: string;
  };
}

// eslint-disable-next-line react/prefer-stateless-function
class C01050503 extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      foo: 'foo',
      bar: {
        baz: 'baz',
      },
    };

    this.handleClick01 = this.handleClick01.bind(this);
    this.handleClick02 = this.handleClick02.bind(this);
  }

  /*
   * 调用 setState() 方法可以只更新一部分属性, react 会使用浅拷贝的方式, 自动合并属性
   */
  private handleClick01() {
    this.setState({
      foo: 'FOO',
    });
  }

  private handleClick02() {
    this.setState({
      bar: {
        baz: 'BAZ',
      },
    });
  }

  public render() {
    const { foo, bar } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick01}>{foo}</Button>
        <Button onClick={this.handleClick02}>{bar.baz}</Button>
      </div>
    );
  }
}

export { C01050503 };
