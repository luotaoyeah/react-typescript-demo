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
  public componentWillUnmount(): void {}

  public render() {
    return <Button>A</Button>;
  }
}

interface IState {
  visible: boolean;
}

class C0302030501 extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      visible: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState({
      visible: false,
    });
  }

  public render() {
    const { visible } = this.state;
    return (
      <div>
        {visible && <A />}
        <Divider />
        <Button onClick={this.handleClick}>unmount A</Button>
      </div>
    );
  }
}

export { C0302030501 };
