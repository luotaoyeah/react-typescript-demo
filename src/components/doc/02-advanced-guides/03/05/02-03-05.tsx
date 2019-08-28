/*
 * https://reactjs.org/docs/context.html#caveats
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 当 Provider 的 value 发生变更时, 下面所有的 Consumer 都会更新,
 * react 通过 Object.is() 方法来判断 value 是否变更,
 * 因此, 如果赋值给 value 属性的是一个匿名对象, 则每次组件渲染之后, 都会造成 value 的变更(每次都会生成一个新的匿名对象),
 * 解决方法: 将一个 state 属性赋值给 value 属性
 */

interface IColorContext {
  color: string;
}

const ColorContext: React.Context<IColorContext> = React.createContext({
  color: 'red',
});

function C020305A() {
  return (
    <ColorContext.Consumer>
      {({ color }: IColorContext) => <Button style={{ color, marginRight: '10px' }}>{new Date().toISOString()}</Button>}
    </ColorContext.Consumer>
  );
}

class C020305 extends React.Component<{}, { date: Date; colorContext: IColorContext }> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      date: new Date(),
      colorContext: {
        color: 'red',
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState({
      date: new Date(),
    });
  }

  public render() {
    const { date, colorContext } = this.state;

    return (
      <>
        <ColorContext.Provider value={{ color: 'green' }}>
          <C020305A />
        </ColorContext.Provider>

        <ColorContext.Provider value={colorContext}>
          <C020305A />
        </ColorContext.Provider>

        <Button onClick={this.handleClick}>{date.toISOString()}</Button>
      </>
    );
  }
}

export { C020305 };
