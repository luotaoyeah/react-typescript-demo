/*
 * Context: Caveats
 */

import React from 'react';
import { Button } from 'antd';

interface IColorContext {
  color: string;
}

const ColorContext: React.Context<IColorContext> = React.createContext({
  color: 'red',
});

function ColorButton(): React.ReactNode {
  return (
    <ColorContext.Consumer>
      {(colorContext: IColorContext) => (
        <Button style={{ color: colorContext.color }}>{new Date().toISOString()}</Button>
      )}
    </ColorContext.Consumer>
  );
}

class C020310 extends React.Component<{}, { date: Date; colorContext: IColorContext }> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      date: new Date(),
      colorContext: {
        color: 'green',
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState({
      date: new Date(),
    });
  }

  public render(): React.ReactNode {
    const { date, colorContext } = this.state;
    return (
      <div>
        {/*
         * Provider 的 value 绑定到一个对象字面量，
         * 每次 render() 方法调用时，都会重新生成一个新的对象，
         * 而 Context 是通过对象引用来判断是否触发更新的，
         * 所以导致该 Context 的 Consumer 都会触发更新；
         *
         * 解决方法是，将 value 绑定到一个 state 属性；
         */}
        {/*
          <ColorContext.Provider value={{color: "green"}}>
            <ColorButton />
          </ColorContext.Provider>
        */}
        <ColorContext.Provider value={colorContext}>
          <ColorButton />
        </ColorContext.Provider>
        <p>
          <Button onClick={this.handleClick}>{date.toISOString()}</Button>
        </p>
      </div>
    );
  }
}

export { C020310 };
