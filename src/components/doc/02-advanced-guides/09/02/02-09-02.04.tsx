/*
 * https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
 */

import React from 'react';
import { Button, Divider } from 'antd';

/*
 * 在 JSX 中, 标签名称中可以包含点运算符, 但是不支持其他形式的表达式,
 * 因此, 如果要在运行时期动态确定组件的类型, 需要将决定组件类型的表达式的结果赋值给一个变量(首字母须大写), 然后在 JSX 中使用这个变量
 */

const C02090204A = {
  foo: () => <Button type="primary">FOO</Button>,
  bar: () => <Button type="danger">BAR</Button>,
};

interface IState {
  type: 'foo' | 'bar';
}

class C02090204B extends React.Component<{}, IState> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      type: 'foo',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    this.setState(prevState => {
      if (prevState.type === 'foo') {
        return {
          type: 'bar',
        };
      }

      return { type: 'foo' };
    });
  }

  public render() {
    const { type } = this.state;

    /*
     * 先计算出组件类型, 再赋值给一个首字母大写的变量, 最后在 JSX 中使用这个变量作为标签名称
     */
    const C = C02090204A[type];

    return (
      <>
        <C></C>

        <Divider />

        <Button onClick={this.handleClick}>TOGGLE</Button>
      </>
    );
  }
}

function C02090204() {
  return <C02090204B></C02090204B>;
}

export { C02090204 };
