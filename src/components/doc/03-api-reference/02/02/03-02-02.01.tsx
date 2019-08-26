/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React from 'react';
import { Button } from 'antd';

/*
 * class component 必须实现 render() 方法, render() 方法返回的是该组件的渲染内容,
 * render() 方法应该是一个 pure function, 不能在里面修改组件状态, 不能在里面操作 DOM
 */

/*
 * 当 props 发生变更时, render() 方法就会被调用, 无论该 props 是否被用于渲染
 */

// eslint-disable-next-line react/prefer-stateless-function
class C03020201A extends React.Component<{ n: number }> {
  public render() {
    console.log(`%c${C03020201A.name}.render()`, 'color:red');
    return <Button>FOO</Button>;
  }
}

/*
 * 当 state 发生变更时, render() 方法就会被调用, 无论该 state 是否被用于渲染
 */
class C03020201B extends React.Component<{}, { n: number }> {
  public timer: number | null = null;

  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      n: 1,
    };
  }

  public componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState(prevState => ({
        n: prevState.n + 1,
      }));
    }, 1000);
  }

  public componentWillUnmount(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  public render() {
    console.log(`%c${C03020201B.name}.render()`, 'color:blue');
    return <Button style={{ marginLeft: '10px' }}>BAR</Button>;
  }
}

class C03020201 extends React.Component<{}, { n: number }> {
  public constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      n: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState(prevState => ({
      n: prevState.n + 1,
    }));
  }

  public render() {
    const { n } = this.state;

    return (
      <>
        <C03020201A n={n}></C03020201A>
        <Button style={{ marginLeft: '10px' }} onClick={this.handleClick}>
          CHANGE PROPS
        </Button>

        <C03020201B></C03020201B>
      </>
    );
  }
}

export { C03020201 };
