/*
 * Using the Effect Hook
 *     Tips for Using Effects
 *         Tip: Use Multiple Effects to Separate Concerns
 */

import React from "react";
import { Button } from "antd";
import Divider from "antd/es/divider";

/*
 * class 组件存在的一个问题：
 *     1. 在同一个 lifecycle method 中，包含多个不相关的业务逻辑
 *     2. 同一个业务逻辑，被分散在多个不同的 lifecycle method 中
 */

class C01 extends React.Component<{}, { count: number; size: { width: number; height: number } }> {
  constructor(props: {}, context: any) {
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

  private handleWindowResize() {
    this.setState({
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  componentDidMount(): void {
    document.title = String(this.state.count);

    window.addEventListener("resize", this.handleWindowResize);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{
      count: number;
      size: { width: number; height: number };
    }>,
    snapshot?: any,
  ): void {
    document.title = String(this.state.count);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  public render(): React.ReactNode {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState(
              (
                prevState: Readonly<{
                  count: number;
                  size: { width: number; height: number };
                }>,
              ) => {
                return { count: prevState.count + 1 };
              },
            );
          }}
        >
          {this.state.count}
        </Button>
        <Divider />
        <Button>{`${this.state.size.width}, ${this.state.size.height}`}</Button>
      </div>
    );
  }
}

class C04040401 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <C01 />
      </div>
    );
  }
}

export { C04040401 };
