/*
 * https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent
 */

import React from 'react';
import { Button } from 'antd';

interface IProps {
  children?(state: IState): React.ReactNode;
}

interface IState {
  text: string;
}

class C02170301A extends React.PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    this.state = { text: 'C02170301A' };
  }

  public render() {
    const { children } = this.props;
    if (children) {
      return children(this.state);
    }

    const { text } = this.state;
    return <Button>{text}</Button>;
  }
}

class C02170301 extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  public renderA(state: IState) {
    return (
      <Button type="primary" style={{ marginLeft: '10px' }}>
        {state.text}
      </Button>
    );
  }

  /*
   * 如果 render props 的值是一个匿名函数, 则每次组件渲染都会创建一个新的函数, 导致该组件失去其 pure 的特性,
   * 解决方法是, 使用一个组件实例方法, 而不是匿名函数
   */
  public render() {
    return (
      <>
        <C02170301A>{(state: IState) => <Button type="danger">{state.text}</Button>}</C02170301A>

        <C02170301A>{this.renderA}</C02170301A>
      </>
    );
  }
}

export { C02170301 };
