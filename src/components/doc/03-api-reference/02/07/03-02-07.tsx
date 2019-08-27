/*
 * https://reactjs.org/docs/react-component.html#shouldcomponentupdate
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 上级组件的 shouldComponentUpdate() 返回 false 时, 不会影响下级组件的更新
 */
class C030207B extends React.Component<{}, { count: number }> {
  private timer: number | null = null;

  public constructor(props: {}) {
    super(props);

    this.state = { count: 0 };
  }

  public componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  public componentWillUnmount(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  public render() {
    const { count } = this.state;

    return <Button>{count}</Button>;
  }
}

interface IState {
  count: number;
}

class C030207A extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /*
   * 默认情况下, 当 props 或者 state 发生变更时, 组件会自动调用 render() 方法更新界面,
   * render() 方法调用之前, 会先调用 shouldComponentUpdate() 方法, 如果 shouldComponentUpdate() 方法返回 false, 则 render() 方法不会调用
   */
  public shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<IState>): boolean {
    return nextState.count % 3 === 0;
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>) => ({ count: prevState.count + 1 }));
  }

  public render() {
    const { count } = this.state;
    return (
      <>
        <C030207B />

        <Button onClick={this.handleClick} style={{ marginLeft: '10px' }}>
          {count}
        </Button>
      </>
    );
  }
}

function C030207() {
  return <C030207A />;
}

export { C030207 };
