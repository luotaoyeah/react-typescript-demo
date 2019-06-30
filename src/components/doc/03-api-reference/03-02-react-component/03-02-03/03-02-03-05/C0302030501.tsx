/*
 * React.Component
 *     Reference
 *         componentWillUnmount()
 */

import React from 'react';
import { Button, Divider } from 'antd';

class A extends React.Component {
  /*
   * componentWillUnmount() 在组件即将 unmount 之前执行，
   * 在该方法中，主要进行资源清理，比如：
   *     清除计时器
   *     解除事件绑定
   *     中止请求
   */
  componentWillUnmount(): void {
    debugger;
  }

  public render(): React.ReactNode {
    return <Button>A</Button>;
  }
}

interface IProps {}

interface IState {
  visible: boolean;
}

class C0302030501 extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.state = {
      visible: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      visible: false,
    });
  }

  public render(): React.ReactNode {
    return (
      <div>
        {this.state.visible && <A />}
        <Divider />
        <Button onClick={this.handleClick}>unmount A</Button>
      </div>
    );
  }
}

export { C0302030501 };
