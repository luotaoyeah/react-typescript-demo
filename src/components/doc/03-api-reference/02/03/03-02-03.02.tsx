/*
 * https://reactjs.org/docs/react-component.html#constructor
 */

import React from 'react';
import { Button } from 'antd';

interface IProps {
  initialX?: number;
}

interface IState {
  x: number;
}

class C03020302A extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    /*
     * 在初始化 state 数据的时候, 可以使用 props 属性的值作为初始值
     */
    this.state = {
      x: props.initialX || 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    this.setState(prevState => ({
      x: prevState.x + 1,
    }));
  }

  public render() {
    const { x } = this.state;

    return <Button onClick={this.handleClick}>{x}</Button>;
  }
}

function C03020302() {
  return <C03020302A initialX={9} />;
}

export { C03020302 };
