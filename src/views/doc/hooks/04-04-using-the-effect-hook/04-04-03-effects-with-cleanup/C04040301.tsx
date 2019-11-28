/*
 * Using the Effect Hook
 *     Effects With Cleanup
 *         Example Using Classes
 */

import React from "react";
import { Button, Divider } from "antd";

/*
 * 有些 side effects 需要进行资源清理，
 * 在 class 组件中，
 *     通常会在 componentDidMount() 中进行注册，
 *     然后会在 componentWillUnmount() 中取消注册
 */

class C01 extends React.Component<{}, { width: number; height: number }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount(): void {
    console.log("removeEventListener");
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize(e: UIEvent) {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  public render() {
    return <Button>{`${this.state.width}, ${this.state.height}`}</Button>;
  }
}

class C04040301 extends React.Component<{}, { visible: boolean }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = { visible: true };
  }

  public render() {
    return (
      <div>
        {this.state.visible && <C01 />}
        <Divider />
        <Button
          onClick={() => {
            this.setState((prevState: Readonly<{ visible: boolean }>) => {
              return { visible: !prevState.visible };
            });
          }}
        >
          TOGGLE
        </Button>
      </div>
    );
  }
}

export { C04040301 };
