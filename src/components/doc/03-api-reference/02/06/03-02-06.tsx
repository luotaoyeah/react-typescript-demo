/*
 * https://reactjs.org/docs/react-component.html#componentwillunmount
 */

import React from 'react';
import { Button } from 'antd';

class C030206A extends React.Component {
  /*
   * componentWillUnmount() 在组件即将从 DOM 卸载(unmount)之前执行,
   * 在该方法中, 主要进行资源清理, 比如:
   *     1. 清除计时器
   *     2. 取消订阅
   *     3. 中止请求
   */
  public componentWillUnmount(): void {
    console.log(`${C030206A.name}.${this.componentWillUnmount.name}()`);
  }

  public render() {
    return <Button>{C030206A.name}</Button>;
  }
}

interface IState {
  visible: boolean;
}

class C030206 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      visible: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  public render() {
    const { visible } = this.state;

    return (
      <div>
        <Button onClick={this.handleClick} style={{ marginRight: '10px' }}>
          TOGGLE
        </Button>

        {visible && <C030206A />}
      </div>
    );
  }
}

export { C030206 };
