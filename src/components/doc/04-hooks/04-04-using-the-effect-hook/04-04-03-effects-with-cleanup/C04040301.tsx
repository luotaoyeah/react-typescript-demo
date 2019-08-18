/*
 * Using the Effect Hook
 *     Effects With Cleanup
 *         Example Using Classes
 */

import React from 'react';
import { Button, Divider } from 'antd';

/*
 * 有些 side effects 需要进行资源清理，
 * 在 class 组件中，
 *     通常会在 componentDidMount() 中进行注册，
 *     然后会在 componentWillUnmount() 中取消注册
 */

class C01 extends React.Component<{}, { width: number; height: number }> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  public componentDidMount(): void {
    window.addEventListener('resize', this.handleWindowResize);
  }

  public componentWillUnmount(): void {
    console.log('removeEventListener');
    window.removeEventListener('resize', this.handleWindowResize);
  }

  public handleWindowResize(e: UIEvent) {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  public render() {
    const { height, width } = this.state;
    return <Button>{`${width}, ${height}`}</Button>;
  }
}

class C04040301 extends React.Component<{}, { visible: boolean }> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = { visible: true };
  }

  public render() {
    const { visible } = this.state;
    return (
      <div>
        {visible && <C01 />}
        <Divider />
        <Button
          onClick={() => {
            this.setState((prevState: Readonly<{ visible: boolean }>) => ({ visible: !prevState.visible }));
          }}
        >
          TOGGLE
        </Button>
      </div>
    );
  }
}

export { C04040301 };
