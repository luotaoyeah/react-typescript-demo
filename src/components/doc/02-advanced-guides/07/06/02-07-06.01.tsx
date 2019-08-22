/*
 * https://reactjs.org/docs/higher-order-components.html#dont-use-hocs-inside-the-render-method
 */

import React from 'react';
import { Button, message } from 'antd';
import { ButtonProps } from 'antd/es/button';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withNothing<P>(C01: any, name: string) {
  return class extends React.Component<P> {
    public componentDidMount(): void {
      message.info(name);
    }

    public render() {
      return <C01 {...this.props}></C01>;
    }
  };
}

const C02070601B = withNothing<ButtonProps>(Button, 'C02070601B');

class C02070601 extends React.Component<{}, { date: Date }> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      date: new Date(),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState({
      date: new Date(),
    });
  }

  public render() {
    const { date } = this.state;

    /*
     * **不要**在 render() 方法里面调用 HOC, 否则每次调用 render() 之后, 都会创建一个新的 C02070601A 组件,
     * 不仅影响性能, 并且每次都需要重新挂载组件, 组件的所有状态都会丢失
     */
    const C02070601A = withNothing<ButtonProps>(Button, 'C02070601A');

    return (
      <>
        <C02070601A onClick={this.handleClick}>{date.toISOString()}</C02070601A>

        <C02070601B onClick={this.handleClick} style={{ marginLeft: '10px' }}>
          {date.toISOString()}
        </C02070601B>
      </>
    );
  }
}

export { C02070601 };
