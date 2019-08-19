/*
 * https://reactjs.org/docs/conditional-rendering.html#preventing-component-from-rendering
 */

import React from 'react';
import { Alert, Button } from 'antd';

interface IProps {
  visible: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
class C010705A extends React.Component<IProps> {
  public render() {
    const { visible } = this.props;

    /*
     * 如果 render() 方法返回 null, 则组件内容不会被渲染,
     * 但是组件的实例依然存在, 组件的生命周期不受影响, 比如 componentDidUpdate 依然会正常触发
     */
    if (!visible) {
      return null;
    }

    return <Alert message="SOME INFO" type="info" />;
  }
}

interface IState {
  visible: boolean;
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
    this.setState((prevState: Readonly<IState>) => ({
      visible: !prevState.visible,
    }));
  }

  public render() {
    const { visible } = this.state;

    return (
      <div>
        <p>
          <Button onClick={this.handleToggle}>{visible ? '隐藏' : '显示'}</Button>
        </p>

        <C010705A visible={visible} />
      </div>
    );
  }
}

export { C010705 };
