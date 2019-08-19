/*
 * Conditional Rendering: Preventing Component from Rendering
 */

import React from 'react';
import { Alert, Button } from 'antd';

interface IState {
  visible: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
class Info extends React.Component<{ visible: boolean }> {
  public render() {
    const { visible } = this.props;
    /*
     * 如果 render() 方法返回 null，则组件不会渲染内容，
     * 但是组件的声明周期不受影响，比如 componentDidUpdate 依然会正常触发；
     */
    if (!visible) {
      return null;
    }

    return <Alert message="some information" type="info" />;
  }
}

class C010705 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      visible: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  public handleToggle() {
    this.setState((prevState: Readonly<IState>, props: Readonly<{}>) => ({
      visible: !prevState.visible,
    }));
  }

  public render() {
    const { visible } = this.state;
    return (
      <div>
        <p>
          <Button size="default" onClick={this.handleToggle}>
            {visible ? '隐藏' : '显示'}
          </Button>
        </p>
        <Info visible={visible} />
      </div>
    );
  }
}

export { C010705 };
