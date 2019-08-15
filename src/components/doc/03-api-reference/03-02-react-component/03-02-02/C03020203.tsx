/*
 * React.Component
 *     The Component Lifecycle
 *         Unmounting
 */

import React from 'react';
import { Button, Divider } from 'antd';

interface IState {
  show: boolean;
}

class A extends React.Component {
  public componentWillUnmount(): void {
    console.log('componentWillUnmount()');
  }

  public render() {
    return 'A';
  }
}

/*
 *
 * 在 unmounting 阶段，react 组件的生命周期包括了下面1个函数的执行：
 *     componentWillUnmount()
 */
class C03020203 extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      show: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({
      show: !prevState.show,
    }));
  }

  public render(): React.ReactNode {
    const { show } = this.state;
    return (
      <div>
        {show && <A />}
        <Divider />
        <Button onClick={this.handleClick}>toggle</Button>
      </div>
    );
  }
}

export { C03020203 };
