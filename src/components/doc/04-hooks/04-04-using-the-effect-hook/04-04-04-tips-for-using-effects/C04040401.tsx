/*
 * Using the Effect Hook
 *     Tips for Using Effects
 *         Tip: Use Multiple Effects to Separate Concerns
 */

import React from 'react';
import { Button } from 'antd';
import Divider from 'antd/es/divider';

/*
 * class 组件存在的一个问题：
 *     1. 在同一个 lifecycle method 中，包含多个不相关的业务逻辑
 *     2. 同一个业务逻辑，被分散在多个不同的 lifecycle method 中
 */

class C01 extends React.Component<{}, { count: number; size: { width: number; height: number } }> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      count: 0,
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  public componentDidMount(): void {
    const { count } = this.state;
    document.title = String(count);

    window.addEventListener('resize', this.handleWindowResize);
  }

  public componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{
      count: number;
      size: { width: number; height: number };
    }>,
    snapshot?: any,
  ): void {
    const { count } = this.state;
    document.title = String(count);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  public handleWindowResize() {
    this.setState({
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  public render() {
    const { count, size } = this.state;
    return (
      <div>
        <Button
          onClick={() => {
            this.setState((prevState: Readonly<{ count: number; size: { width: number; height: number } }>) => ({
              count: prevState.count + 1,
            }));
          }}
        >
          {count}
        </Button>
        <Divider />
        <Button>{`${size.width}, ${size.height}`}</Button>
      </div>
    );
  }
}

function C04040401() {
  return (
    <div>
      <C01 />
    </div>
  );
}

export { C04040401 };
