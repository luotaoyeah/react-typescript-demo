/*
 * Building Your Own Hooks
 *     render props
 */

import React from 'react';
import { Button, Divider, Tag } from 'antd';

/*
 * 在 hooks 出现之前，如果想要共享组件逻辑，
 * 通常的做法是：使用 render props 或者 higher-order-component，
 * 有了 hooks 之后，我们可以通过实现自己的 hook 函数，用来共享状态逻辑
 */

interface IProps {
  render: (state: IState) => React.ReactNode;
}

interface IState {
  size: { width: number; height: number };
}

/**  */
class C01 extends React.Component<IProps, IState> {
  constructor(props: IProps, context: {}) {
    super(props, context);
    this.state = {
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  public componentDidMount(): void {
    window.addEventListener('resize', this.handleWindowResize);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  private handleWindowResize() {
    this.setState({
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  // tslint:disable-next-line:member-ordering
  public render(): React.ReactNode {
    return this.props.render(this.state);
  }
}

// tslint:disable-next-line:max-classes-per-file
class C04060101 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <C01
          render={(state: IState) => <Button>{`${state.size.width}, ${state.size.height}`}</Button>}
        />
        <Divider />
        <C01 render={(state: IState) => <Tag>{`${state.size.width}, ${state.size.height}`}</Tag>} />
      </div>
    );
  }
}

export { C04060101 };
